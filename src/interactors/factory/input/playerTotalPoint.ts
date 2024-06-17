import ScoreList from '../../../domain/collection/scoreList'
import Player from '../../../domain/entities/player'
import PlayedDate from '../../../domain/value/date'
import PlayMode from '../../../domain/value/mode'
import Point from '../../../domain/value/point'
import Score from '../../../domain/value/score'
import PlayerDTO from '../../dto/player'

export function constructPlayerDTO(player: Player): PlayerDTO {
  return new PlayerDTO(player)
}

export function reconstructPlayer(player: PlayerDTO): Player {
  const id = player.Id
  const name = player.name
  const scores = player.scores.map(score => {
    const date = new PlayedDate(score.date)
    const point = new Point(score.point)
    const mode = new PlayMode(score.mode)
    return new Score(date, point, mode)
  })
  const scoreList = new ScoreList(scores)

  return new Player(id, name, scoreList)
}
