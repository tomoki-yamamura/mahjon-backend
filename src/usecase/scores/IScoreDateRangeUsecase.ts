import ScoreDateResponse from "usecase/dto/ScoreDateRangeResponse";

export default interface IScoreDateRangeUsecase {
  search(): Promise<ScoreDateResponse[]>;
}
