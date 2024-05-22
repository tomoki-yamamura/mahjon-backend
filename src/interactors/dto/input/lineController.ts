import moment from 'moment';
import { params } from "../../../interface/ILineInteractor";

export interface LineWebhookEvent {
  type: string;
  message: {
    type: string;
    id: string;
    quoteToken: string;
    text: richMenuText
  };
  webhookEventId: string;
  deliveryContext: {
    isRedelivery: boolean;
  };
  timestamp: number;
  source: {
    type: string;
    userId: string;
  };
  replyToken: string;
  mode: string;
}

export interface LineWebhookRequest {
  destination: string;
  events: LineWebhookEvent[];
}

type richMenuText = "Today 3players" | "Weekly 3players" | "Monthly 3players" | "Today 4players" | "Weekly 4players" | "Monthly 4players"

function getToday(): Date {
  return new Date();
}

function getWeekly(): Date {
  const monday = moment().startOf('isoWeek'); // ISO 8601: Monday is the first day of the week
  return monday.toDate();
}

function getMonthly(): Date {
  const firstDayOfMonth = moment().startOf('month');
  return firstDayOfMonth.toDate();
}

const dateMap = new Map<string, Date>();

dateMap.set("Today", getToday());
dateMap.set("Weekly", getWeekly());
dateMap.set("Monthly", getMonthly());

export function constructLineInput(req: LineWebhookRequest): [string, params] {
  const text = req.events[0].message.text
  const [date, mode] = text.split(' ')
  const input = {
    mode: mode,
    startDate: dateMap.get(date)!,
    endDate: getToday()
  }
  const replyToken = req.events[0].replyToken
  return [replyToken, input]
}
