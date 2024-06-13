import { getScoresInputParams } from '../../../controllers/input/scoreController';
import { getScoreInteractorInput } from '../../../interface/IScoreInteractor';
import { parseStringToDate } from '../../../utils/date';

export function constructGetScoreInput(req: getScoresInputParams): getScoreInteractorInput  {
  const input: getScoreInteractorInput = {
    startDate: parseStringToDate(req.startDate),
    endDate: parseStringToDate(req.endDate),
    mode: req.mode
  }
  return input
}
