import PlayedDate from "../value/date";
import PlayMode from "../value/mode";
import Score from "./score";

class Hanchan {
  readonly Id: string;
  readonly Date: PlayedDate;
  readonly mode: PlayMode;
  readonly Scores: Score[];
  constructor(id: string, date: PlayedDate, mode: PlayMode, scores: Score[]) {
    this.Id = id;
    this.Date = date;
    this.mode = mode
    this.Scores = scores;
  }

  addScore(score: Score): void {
    this.Scores.push(score);
  }
}

export default Hanchan;
