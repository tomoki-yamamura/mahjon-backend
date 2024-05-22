import Score from "../value/score";
import PlayedDate from "../value/date";
import Point from "../value/point";
import PlayMode from "../value/mode";

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

  filterScoresByDate(startDate: PlayedDate, endDate: PlayedDate): ScoreList {
    const newScores = this.scores.filter((score) => {
      return score.date.isAfter(startDate) && score.date.isBefore(endDate)
    })
    return new ScoreList(newScores)
  }

  filterScoresByMode(mode: PlayMode): ScoreList {
    const newScores = this.scores.filter((score) => score.mode.isEqualTo(mode))
    return new ScoreList(newScores)
  }
}


export default ScoreList