import { LineWebhookRequest, params } from "../../../interface/ILineInteractor";
import { dateMap, getEndOfToday } from '../../../utils/date';

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
