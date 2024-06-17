import Score from '../../score'
import { fixDate } from './date'
import { mode3players } from './mode'
import { point1 } from './point'

const fixtureScore = new Score(fixDate, point1, mode3players)

export default fixtureScore
