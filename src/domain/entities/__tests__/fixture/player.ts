import * as fixtureValue from "../../../value/__tests__/fixture/index"
import * as fixtureList from "../../../collection/__tests__/fixture/index"
import Player from "../../player";

const Id = "1";
const name = "fixture1"

export default new Player(Id, name, fixtureList.scoreList)

// import ScoreList from "../collection/scoreList";
// import PlayedDate from "../value/date";
// import PlayMode from "../value/mode";
// import Point from "../value/point";

// class Player {
//   readonly Id: string;
//   readonly name: string;
//   readonly scores: ScoreList;
//   constructor(id: string, name: string, scores: ScoreList) {
//     this.Id = id
//     this.name = name
//     this.scores = scores
//   }
  
//   totalScores(): Point {
//     return this.scores.totalScorePoint()
//   }

//   filterScoresByDate(startDate: PlayedDate, endDate: PlayedDate): Player {
//     const filteredScoreList = this.scores.filterScoresByDate(startDate, endDate)
//     return new Player(this.Id, this.name, filteredScoreList)
//   }

//   filterScoresByMode(mode: PlayMode): Player {
//     const filteredScoreList = this.scores.filterScoresByMode(mode)
//     return new Player(this.Id, this.name, filteredScoreList)
//   }
// }

// export default Player;
