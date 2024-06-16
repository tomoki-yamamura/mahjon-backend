import Player from "../../../../domain/entities/player";
import { Rank, playerRankMap } from "../../../../domain/service/rankService";
import PlayMode from "../../../../domain/value/mode";
import Score from "../../../../domain/value/score";
import { Position, RankOutput } from "../../../output/rank";
import { ScoreOutput } from "../../../output/score";

export function constructRankOutput(rankMap: playerRankMap, player: Player, mode: PlayMode): RankOutput {
  const ranks = rankMap.get(player)!
  const positions = ranks.map((rank) => {
    const position: Position = {
      date: rank.date.getDate(),
      position: rank.position
    } 
    return position
  })
  const result: RankOutput = {
    player: player.name,
    mode: mode.getMode(),
    positions
  }
  return result
}