import PlayedDate from "../../value/date";
import Score from "../score";
import Point from "../../value/point";
import Player from "../player";
import Hanchan from "../hanchan";
import HanchanList from "../hanchanList";
import PlayMode from "../../value/mode";
import { testHanchan3player, testHanchan4player } from "./fixture/hanchan";

describe('HanchanList', () => {

  const date = new PlayedDate(new Date());
  const player = new Player("1", "tester")
  const point = new Point(0)
  const mode = new PlayMode("3player")
  const scores = [new Score("1", player, point)]
  const testData = new Hanchan("3", date, mode, scores);

  const hanchanList = new HanchanList([testHanchan3player, testHanchan4player]);
  
  test('addHanchan should add a score to the hanchans array', () => {
    expect(hanchanList.getHanchans().length).toEqual(2)
    hanchanList.addHanchan(testData);
    expect(hanchanList.getHanchans().length).toEqual(3)
  });
});

describe('HanchanList', () => {
  const now = new Date()
  const nowDate = new PlayedDate(now)
  const dateOneSecondLater = new PlayedDate(new Date(now.getTime() + 1000));

  const hanchanList = new HanchanList([testHanchan3player, testHanchan4player]);
  test('filterHanchanByDate should return filterd hanchans array', () => {
    hanchanList.filterHanchanByDate(nowDate, dateOneSecondLater)
    expect(hanchanList.getHanchans().length).toEqual(2)
  });
});

describe('HanchanList', () => {
  const now = new Date()
  const nowDate = new PlayedDate(now)
  const dateOneSecondBefore = new PlayedDate(new Date(now.getTime() - 1000));

  const hanchanList = new HanchanList([testHanchan3player, testHanchan4player]);
  test('filterHanchanByDate should return filterd hanchans array', () => {
    hanchanList.filterHanchanByDate(dateOneSecondBefore, nowDate)
    expect(hanchanList.getHanchans().length).toEqual(2)
  });
});

describe('HanchanList', () => {
  const now = new Date()
  const dateOneSecondBefore = new PlayedDate(new Date(now.getTime() - 1000));
  const dateTwoSecondBefore = new PlayedDate(new Date(now.getTime() - 2000));

  const hanchanList = new HanchanList([testHanchan3player, testHanchan4player]);
  test('filterHanchanByDate should return filterd hanchans array', () => {
    hanchanList.filterHanchanByDate(dateTwoSecondBefore, dateOneSecondBefore)
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