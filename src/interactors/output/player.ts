import { ScoreOutput } from './score'

export type PlayerOutput = {
  readonly Id: string
  readonly name: string
  readonly scores: ScoreOutput[]
}
