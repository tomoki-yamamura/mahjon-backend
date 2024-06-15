import PlayedDate from "../value/date";
import PlayedDateRange from "../value/dateRange";
import PlayMode from "../value/mode";
import Point from "../value/point";
import Score from "../value/score";

class Player {
  readonly Id: string;
  readonly name: string;
  readonly scores: Score[];
  constructor(id: string, name: string, scores: ScoreList) {
    this.Id = id
    this.name = name
    this.scores = scores
  }
  
  totalScores(): Point {
    return this.scores.totalScorePoint()
  }

  getScoreByDate(date: PlayedDate): Score {
    return this.scores.
  }

  filterScoresByDate(dateRange: PlayedDateRange): Player {
    const filteredScoreList = this.scores.filter(dateRange)
    return new Player(this.Id, this.name, filteredScoreList)
  }

  filterScoresByMode(mode: PlayMode): Player {
    const filteredScoreList = this.scores.filterScoresByMode(mode)
    return new Player(this.Id, this.name, filteredScoreList)
  }
}

export default Player;
