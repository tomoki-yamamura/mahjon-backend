import PlayedDate from "../value/date";
import PlayedDateRange from "../value/dateRange";
import PlayMode from "../value/mode";
import Point from "../value/point";
import Score from "../value/score";

class Player {
  readonly Id: string;
  readonly name: string;
  readonly scores: Score[];
  constructor(id: string, name: string, scores: Score[]) {
    this.Id = id
    this.name = name
    this.scores = scores
  }
  
  totalScores(): Point {
    return this.scores.reduce((acc, cur) => acc.add(cur.point), new Point(0))
  }

  getScoreByDate(date: PlayedDate): Score {
    return this.scores.
  }

  filterScoresByDate(dateRange: PlayedDateRange): Player {
    const filteredScoreList = this.scores.filter((score) => dateRange.isWithinRange(score.date))
    return new Player(this.Id, this.name, filteredScoreList)
  }

  filterScoresByMode(mode: PlayMode): Player {
    const filteredScoreList = this.scores.filter((score) => score.mode.isEqualTo(mode))
    return new Player(this.Id, this.name, filteredScoreList)
  }
}

export default Player;
