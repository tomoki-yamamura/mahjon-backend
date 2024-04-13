import { injectable, inject } from "inversify";
import IScoreDateRangeUsecase from "usecase/scores/IScoreDateRangeUsecase";

@injectable()
export default class ScoreDateRangeInteractor implements IScoreDateRangeUsecase {
  @inject(TYPES)
}