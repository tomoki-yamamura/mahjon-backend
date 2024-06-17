import ScoreList from '../../collection/scoreList'
import PlayedDate from '../../value/date'
import PlayMode from '../../value/mode'

export type getScoresByDateParamsAndMode = {
  mode: PlayMode
  startDate: PlayedDate
  endDate: PlayedDate
}

export interface IScoreRepository {
  getScoresByDateAndMode(
    input: getScoresByDateParamsAndMode,
  ): Promise<ScoreList>
}
