import Player from "../../../domain/entities/player";
import { IPlayer } from "../db/model/player";
import { IScore } from "../db/model/score";
import Score from "../../../domain/value/score";
import Point from "../../../domain/value/point";
import PlayedDate from "../../../domain/value/date";
import PlayMode from "../../../domain/value/mode";
import ScoreList from "../../../domain/collection/scoreList";
import PlayerList from "../../../domain/collection/playerList";

export function reconstructPlayers(scoreModels: IScore[]): PlayerList {
  const playerMap: { [key: string]: { name: string, scores: Score[] } } = {};

  scoreModels.forEach((scoreModel) => {
    const playerId = scoreModel.playerId.toString();
    const playerName = (scoreModel.playerId as IPlayer).name;
    const point = new Point(scoreModel.point);
    const date = new PlayedDate(scoreModel.date);
    const mode = new PlayMode(scoreModel.mode);
    const score = new Score(date, point, mode);

    if (!playerMap[playerId]) {
      playerMap[playerId] = { name: playerName, scores: [] };
    }

    playerMap[playerId].scores.push(score);
  });

  const players = Object.keys(playerMap).map((playerId) => {
    const { name, scores } = playerMap[playerId];
    const scoreList = new ScoreList(scores);
    return new Player(playerId, name, scoreList);
  });

  return new PlayerList(players)
}
