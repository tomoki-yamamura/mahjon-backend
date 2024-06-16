import PlayerList from "../../collection/playerList";
import ScoreList from "../../collection/scoreList";
import { player } from "../../entities/__tests__/fixture";
import Player from "../../entities/player";
import * as fixtureValue from "../../value/__tests__/fixture/index"
import PlayedDateRange from "../../value/dateRange";
import Point from "../../value/point";
import Score from "../../value/score";
import RankService, { Rank } from "../rankService";

describe('getPlayerRank for 3players', () => {
  const scores1 = new Score(fixtureValue.fixDate, new Point(-50), fixtureValue.mode3players)
  const scores2 = new Score(fixtureValue.oneSecLaterDate, new Point(50), fixtureValue.mode3players)
  const playerA = new Player("1", "playerA", new ScoreList([scores1, scores2]))
  const scores3 = new Score(fixtureValue.fixDate, new Point(0), fixtureValue.mode3players)
  const scores4 = new Score(fixtureValue.oneSecLaterDate, new Point(-50), fixtureValue.mode3players)
  const playerB = new Player("2", "playerB", new ScoreList([scores3, scores4]))
  const scores5 = new Score(fixtureValue.fixDate, new Point(50), fixtureValue.mode3players)
  const scores6 = new Score(fixtureValue.oneSecLaterDate, new Point(0), fixtureValue.mode3players)
  const playerC = new Player("3", "playerC", new ScoreList([scores5, scores6]))
  const dateRange = new PlayedDateRange(fixtureValue.fixDate, fixtureValue.oneSecLaterDate)

  const playerList = new PlayerList([playerA, playerB, playerC])

  const rankService = new RankService(playerList)

  test('should return a playerA result', () => {
    const expected: Rank[] = [
      {
        date: fixtureValue.fixDate,
        position: 3
      },
      {
        date: fixtureValue.oneSecLaterDate,
        position: 1
      },
    ]
    expect(rankService.getPlayerRank(playerA, dateRange, fixtureValue.mode3players).get(playerA)).toEqual(expected)
  });
  test('should return a playerB result', () => {
    const expected: Rank[] = [
      {
        date: fixtureValue.fixDate,
        position: 2
      },
      {
        date: fixtureValue.oneSecLaterDate,
        position: 3
      },
    ]
    expect(rankService.getPlayerRank(playerB, dateRange, fixtureValue.mode3players).get(playerB)).toEqual(expected)
  });
  test('should return a playerC result', () => {
    const expected: Rank[] = [
      {
        date: fixtureValue.fixDate,
        position: 1
      },
      {
        date: fixtureValue.oneSecLaterDate,
        position: 2
      },
    ]
    expect(rankService.getPlayerRank(playerC, dateRange, fixtureValue.mode3players).get(playerC)).toEqual(expected)
  });
});

describe('getPlayerRank for 4players', () => {
  const scores1 = new Score(fixtureValue.fixDate, new Point(-20), fixtureValue.mode3players)
  const scores2 = new Score(fixtureValue.oneSecLaterDate, new Point(20), fixtureValue.mode3players)
  const playerA = new Player("1", "playerA", new ScoreList([scores1, scores2]))
  const scores3 = new Score(fixtureValue.fixDate, new Point(-1), fixtureValue.mode3players)
  const scores4 = new Score(fixtureValue.oneSecLaterDate, new Point(30), fixtureValue.mode3players)
  const playerB = new Player("2", "playerB", new ScoreList([scores3, scores4]))
  const scores5 = new Score(fixtureValue.fixDate, new Point(1), fixtureValue.mode3players)
  const scores6 = new Score(fixtureValue.oneSecLaterDate, new Point(-30), fixtureValue.mode3players)
  const playerC = new Player("3", "playerC", new ScoreList([scores5, scores6]))
  const scores7 = new Score(fixtureValue.fixDate, new Point(20), fixtureValue.mode3players)
  const scores8 = new Score(fixtureValue.oneSecLaterDate, new Point(-20), fixtureValue.mode3players)
  const playerD = new Player("4", "playerD", new ScoreList([scores7, scores8]))
  const dateRange = new PlayedDateRange(fixtureValue.fixDate, fixtureValue.oneSecLaterDate)

  const playerList = new PlayerList([playerA, playerB, playerC, playerD])

  const rankService = new RankService(playerList)
  
  test('should return a playerA result', () => {
    const expected: Rank[] = [
      {
        date: fixtureValue.fixDate,
        position: 4
      },
      {
        date: fixtureValue.oneSecLaterDate,
        position: 2
      },
    ]
    expect(rankService.getPlayerRank(playerA, dateRange, fixtureValue.mode3players).get(playerA)).toEqual(expected);
  });
  test('should return a playerB result', () => {
    const expected: Rank[] = [
      {
        date: fixtureValue.fixDate,
        position: 3
      },
      {
        date: fixtureValue.oneSecLaterDate,
        position: 1
      },
    ]
    expect(rankService.getPlayerRank(playerB, dateRange, fixtureValue.mode3players).get(playerB)).toEqual(expected);
  });
  test('should return a playerC result', () => {
    const expected: Rank[] = [
      {
        date: fixtureValue.fixDate,
        position: 2
      },
      {
        date: fixtureValue.oneSecLaterDate,
        position: 4
      },
    ]
    expect(rankService.getPlayerRank(playerC, dateRange, fixtureValue.mode3players).get(playerC)).toEqual(expected);
  });
  test('should return a playerD result', () => {
    const expected: Rank[] = [
      {
        date: fixtureValue.fixDate,
        position: 1
      },
      {
        date: fixtureValue.oneSecLaterDate,
        position: 3
      },
    ]
    expect(rankService.getPlayerRank(playerD, dateRange, fixtureValue.mode3players).get(playerD)).toEqual(expected);
  });
});
