import Hanchan from "../domain/entities/hanchan";

type params = {
  startDate: Date;
  endDate: Date;
};

export interface IHanchanInteractor {
  getHanchansByDate(input: params): Promise<Hanchan>;
}
