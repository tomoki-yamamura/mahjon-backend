import moment from 'moment-timezone';
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

function getStartOfToday() {
  const startOfToday = moment().startOf('day').tz('Asia/Tokyo');
  return startOfToday.toDate();
}

function getEndOfToday() {
  const endOfToday = moment().endOf('day').tz('Asia/Tokyo');
  return endOfToday.toDate();
}

function getWeekly(): Date {
  const monday = moment().startOf('isoWeek').tz('Asia/Tokyo'); // ISO 8601: Monday is the first day of the week
  return monday.toDate();
}

function getMonthly(): Date {
  const firstDayOfMonth = moment().startOf('month').tz('Asia/Tokyo');
  return firstDayOfMonth.toDate();
}

const dateMap = new Map<string, Date>();

dateMap.set("Today", getStartOfToday());
dateMap.set("Weekly", getWeekly());
dateMap.set("Monthly", getMonthly());

export function constructLineInput(req: LineWebhookRequest): [string, params] {
  const text = req.events[0].message.text
  const [date, mode] = text.split(' ')
  const input = {
    mode: mode,
    startDate: dateMap.get(date)!,
    endDate: getEndOfToday()
  }
  console.log(input);
  
  const replyToken = req.events[0].replyToken
  return [replyToken, input]
}
