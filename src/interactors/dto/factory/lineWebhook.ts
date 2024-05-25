import { LineWebhookRequest, sendScoreToPlayerInput } from '../../../interface/ILineInteractor';
import { dateMap, getEndOfToday } from '../../../utils/date';

export function constructLineInput(req: LineWebhookRequest): sendScoreToPlayerInput {
  const text = req.events[0].message.text
  const [date, mode] = text.split(' ')
  const replyToken = req.events[0].replyToken
  const userId = req.events[0].source.userId
  const input: sendScoreToPlayerInput = {
    replyToken,
    userId,
    mode,
    startDate: dateMap.get(date)!,
    endDate: getEndOfToday()
  }
  return input
}
