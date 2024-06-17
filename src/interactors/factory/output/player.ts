import PlayerList from '../../../domain/collection/playerList'
import { PlayerOutput } from '../../output/player'
import { constructScoreOutput } from './score'

export function constructPlayerOutput(players: PlayerList): PlayerOutput[] {
  const result = players.getPlayers().map(player => {
    const Id = player.Id
    const name = player.name
    const scores = player.scores
      .getScores()
      .map(score => constructScoreOutput(score))

    const playerOutput: PlayerOutput = {
      Id,
      name,
      scores,
    }
    return playerOutput
  })
  return result
}
