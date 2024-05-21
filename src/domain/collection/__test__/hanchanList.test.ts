import Score from "../../entities/score";
import Point from "../../value/point";
import Player from "../../entities/player";
import Hanchan from "../../entities/hanchan";
import HanchanList from "../hanchanList";
import PlayMode from "../../value/mode";
import { testHanchan3player, testHanchan4player } from "../../entities/__test__/fixture/hanchan";
import { fixDate, oneBeforeDate, oneSecLaterDate } from "../../value/__tests__/fixture/date";

describe('HanchanList', () => {

  const player = new Player("1", "tester")
  const point = new Point(0)
  const mode = new PlayMode("3player")
  const scores = [new Score("1", player, point)]
  const testData = new Hanchan("3", fixDate, mode, scores);

  const hanchanList = new HanchanList([testHanchan3player, testHanchan4player]);
  
  test('addHanchan should add a score to the hanchans array', () => {
    expect(hanchanList.getHanchans().length).toEqual(2)
    const addedHanchnaList = hanchanList.addHanchan(testData);
    expect(addedHanchnaList.getHanchans().length).toEqual(3)
  });
});

describe('HanchanList', () => {

  const hanchanList = new HanchanList([testHanchan3player, testHanchan4player]);
  test('filterHanchanByDate should return filterd hanchans array', () => {
    hanchanList.filterHanchanByDate(fixDate, oneSecLaterDate)
    expect(hanchanList.getHanchans().length).toEqual(2)
  });
});

describe('HanchanList', () => {
  const hanchanList = new HanchanList([testHanchan3player, testHanchan4player]);
  test('filterHanchanByDate should return filterd hanchans array', () => {
    hanchanList.filterHanchanByDate(oneBeforeDate, fixDate)
    expect(hanchanList.getHanchans().length).toEqual(2)
  });
});

describe('HanchanList', () => {
  const hanchanList = new HanchanList([testHanchan3player, testHanchan4player]);
  test('filterHanchanByDate should return filterd hanchans array', () => {
    hanchanList.filterHanchanByDate(oneSecLaterDate, oneSecLaterDate)
    expect(hanchanList.getHanchans().length).toEqual(0)
  });
});

describe('HanchanList', () => {

  const mode = new PlayMode("3player")

  const hanchanList = new HanchanList([testHanchan3player, testHanchan4player]);
  test('filterHanchanByMode should return filterd hanchans array', () => {
    hanchanList.filterHanchanByMode(mode)
    expect(hanchanList.getHanchans()).toEqual([testHanchan3player])
  });
});