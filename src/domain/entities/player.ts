import ScoreList from "../collection/scoreList";
import PlayedDate from "../value/date";
import PlayedDateRange from "../value/dateRange";
import PlayMode from "../value/mode";
import Point from "../value/point";
import Score from "../value/score";

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
    return this.scores.totalScorePoint()
  }

  getScoreByDate(date: PlayedDate): Score {
    return this.scores.getScoreByDate(date)
  }

  filterScoresByDate(dateRange: PlayedDateRange): Player {
    const filteredScoreList = this.scores.filterScoresByDate(dateRange)
    return new Player(this.Id, this.name, filteredScoreList)
  }

  filterScoresByMode(mode: PlayMode): Player {
    const filteredScoreList = this.scores.filterScoresByMode(mode)
    return new Player(this.Id, this.name, filteredScoreList)
  }
}

export default Player;