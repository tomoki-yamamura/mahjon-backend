import Hanchan from "../entities/hanchan";
import PlayedDate from "../value/date";
import PlayMode from "../value/mode";

type getHanchansByDateParams = {
  mode: PlayMode
  startDate: PlayedDate;
  endDate: PlayedDate;
}

export interface ISheetRepository {
  getAllHanchans(): Promise<Hanchan[]>;
  getHanchansByDate(input: getHanchansByDateParams): Promise<Hanchan[]>;
}
