import { getScoresInputParams } from '../../../controllers/input/scoreController';
import { parseStringToDate } from '../../../utils/date';
import { getScoreInteractorInput } from '../../input/scoreInteractor';

export function constructGetScoreInput(req: getScoresInputParams): getScoreInteractorInput  {
  const input: getScoreInteractorInput = {
    startDate: parseStringToDate(req.startDate),
    endDate: parseStringToDate(req.endDate),
    mode: req.mode
  }
  return input
}
