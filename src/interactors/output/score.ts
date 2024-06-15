import Player from "../../domain/entities/player";

export type getScoreInteractorOuput = {
  player: string;
  point: number;
  date: Date;
}

export function constructGetScoreInteractorOuput(players: Player[]): getScoreInteractorOuput[] {
  const scores = players.map((player) => {
    const score: getScoreInteractorOuput = {
      player: player.name,
      point: player.
    }
  })
}
