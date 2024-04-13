import { Container } from "inversify";
import { TYPES } from "./types";

const container = new Container();

container
  .bind<ScoreController>(TYPES.ScoreController)
  .to(ScoreController)
  .inSingletonScope();
container
  .bind<IScoreDateRangeUsecase>(TYPES.IScoreDateRangeUsecase)
  .to(ScoreDateRangeInteractor)
  .inSingletonScope();

export default container ;