import { player } from "../../entities/__tests__/fixture";
import ReplyMessage from "../replyMessage";

describe('replyMessage', () => {
  const replyMessage = new ReplyMessage([player])
  const name = player.name
  const point = player.totalScores().getPoint()
  const expectedMessage = `${name}さん: ${point}` + '\n'
  test('should return a formatted message', () => {
    expect(replyMessage.formatMessage()).toEqual(expectedMessage);
  });
});

describe('replyMessage', () => {
  const replyMessage = new ReplyMessage([])
  const expectedMessage = "成績がありません。"
  test('should return a formatted message', () => {
    expect(replyMessage.formatMessage()).toEqual(expectedMessage);
  });
});
