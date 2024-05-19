import PlayedDate from "../value/date";
import PlayMode from "../value/mode";
import Hanchan from "./hanchan";

class HanchanList {
  private hanchans: Hanchan[]

  constructor(hanchans: Hanchan[]) {
    this.hanchans = hanchans
  }

  getHanchans(): Hanchan[] {
    return this.hanchans
  }

  addHanchan(hanchan: Hanchan): void {
    this.hanchans.push(hanchan);
  }

  filterHanchanByMode(mode: PlayMode)  {
    const filterd = this.hanchans.filter((hanchan: Hanchan) => hanchan.mode.isEqualTo(mode))
    this.hanchans = filterd
  }

  filterHanchanByDate(startDate: PlayedDate, endDate: PlayedDate)  {
    const filterd = this.hanchans.filter((hanchan: Hanchan) => hanchan.Date.isAfter(startDate) && hanchan.Date.isBefore(endDate))
    this.hanchans = filterd
  }
}

export default HanchanList;