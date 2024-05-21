import Score from "../entities/score";
import PlayedDate from "../value/date";
import Point from "../value/point";

class ScoreList {
  private scores: Score[];

  constructor(scores: Score[]) {
    this.scores = scores;
  }

  add(score: Score): ScoreList {
    const newScores = [...this.scores, score];
    return new ScoreList(newScores);
  }

  totalScorePoint(): Point {
    return this.scores.reduce((acc, cur) => acc.add(cur.point), new Point(0))
  }

  getScores(): Score[] {
    return [...this.scores];
  }

  filterScores(startDate: PlayedDate, endDate: PlayedDate): ScoreList {
    const newScores = this.scores.filter((score) => {
      return score.date.isAfter(startDate) && score.date.isBefore(endDate)
    })
    return new ScoreList(newScores)
  }
}


export default ScoreList