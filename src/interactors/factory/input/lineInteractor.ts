import { LineWebhookRequest } from '../../../controllers/input/lineController'
import { dateMap, getEndOfToday } from '../../../utils/date'
import { lineInteractorInput } from '../../input/lineInteractor'

export function constructLineInput(
  req: LineWebhookRequest,
): lineInteractorInput {
  const text = req.events[0].message.text
  const [date, mode] = text.split(' ')
  const replyToken = req.events[0].replyToken
  const userId = req.events[0].source.userId
  const input: lineInteractorInput = {
    replyToken,
    userId,
    mode,
    startDate: dateMap.get(date)!,
    endDate: getEndOfToday(),
  }
  return input
}
