import Score from '../../../domain/value/score'
import { ScoreOutput } from '../../output/score'

export function constructScoreOutput(score: Score): ScoreOutput {
  const date = score.date.getDate()
  const point = score.point.getPoint()
  const mode = score.mode.getMode()
  const result: ScoreOutput = {
    date,
    point,
    mode,
  }
  return result
}
