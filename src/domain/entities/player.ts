import ScoreList from "../collection/scoreList";
import Point from "../value/point";
import Score from "./score";

class Player {
  readonly Id: string;
  readonly name: string;
  readonly scores: ScoreList;
  constructor(id: string, name: string, scores: ScoreList) {
    this.Id = id
    this.name = name
    this.scores = scores
  }

  totalScores(): Point {
    return this.scores.reduce((acc, cur) => acc.add(cur.point), new Point(0));
  }
}

export default Player;
