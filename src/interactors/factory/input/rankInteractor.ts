import { getRankInputParams } from '../../../controllers/input/rankController'
import { parseStringToDate } from '../../../utils/date'
import { getRankInteractorInput } from '../../input/rankInteractor'

export function constructGetRankInput(
  req: getRankInputParams,
): getRankInteractorInput {
  const input: getRankInteractorInput = {
    startDate: parseStringToDate(req.startDate),
    endDate: parseStringToDate(req.endDate),
    mode: req.mode,
  }
  return input
}
