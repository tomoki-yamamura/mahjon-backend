import Score from "../value/score";
import PlayedDate from "../value/date";
import Point from "../value/point";
import PlayMode from "../value/mode";
import PlayedDateRange from "../value/dateRange";

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
    return [...this.scores]
  }

  hasScoreDate(date: PlayedDate): boolean {
    return this.scores.some((score) => score.date.isEqualTo(date))
  }

  getScoreByDate(date: PlayedDate): Score {
    return this.scores.filter((score) => score.date.isEqualTo(date))[0]
  }

  filterScoresByDate(dateRange: PlayedDateRange): ScoreList {
    const newScores = this.scores.filter((score) => {
      return dateRange.isWithinRange(score.date);
    })
    return new ScoreList(newScores)
  }

  filterScoresByMode(mode: PlayMode): ScoreList {
    const newScores = this.scores.filter((score) => score.mode.isEqualTo(mode))
    return new ScoreList(newScores)
  }
}


export default ScoreList