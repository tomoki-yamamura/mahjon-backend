import HanchanList from "../../domain/collection/hanchanList";
import Hanchan from "../../domain/entities/hanchan";
import Player from "../../domain/entities/player";
import Score from "../../domain/entities/score";
import PlayedDate from "../../domain/value/date";
import PlayMode from "../../domain/value/mode";
import Point from "../../domain/value/point";
import { IHanchan } from "../db/model/hanchan";

export function convertToHanchanList(hanchanModels: IHanchan[]): HanchanList {
  const lists = hanchanModels.map(hanchanModel => {
    const Id = hanchanModel._id.toString()
    const date = new PlayedDate(hanchanModel.date)
    const mode = new PlayMode(hanchanModel.mode)
    const scores = hanchanModel.scores.map((score: any) => {
      const Id = score._id.toString()
      const playerName = score.name
      const player = new Player(Id, playerName)
      return new Score(player, new Point(score.point))
    })
    return new Hanchan(Id, date, mode, scores)
  })
  return new HanchanList(lists)
}
