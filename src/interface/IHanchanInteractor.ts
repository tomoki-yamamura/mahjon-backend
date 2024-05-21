import HanchanList from "../domain/collection/hanchanList";

type params = {
  startDate: Date;
  endDate: Date;
};

export interface IHanchanInteractor {
  getHanchansByDate(input: params): Promise<HanchanList>;
}
