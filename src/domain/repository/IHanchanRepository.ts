import HanchanList from "../collection/hanchanList";
import PlayedDate from "../value/date";
import PlayMode from "../value/mode";

export type getHanchansByDateParams = {
  mode: PlayMode
  startDate: PlayedDate;
  endDate: PlayedDate;
}

export interface IHanchanRepository {
  getAllHanchans(): Promise<HanchanList>;
  getHanchansByDate(input: getHanchansByDateParams): Promise<HanchanList>;
}
