import { IPlayer } from "../db/model/player";
import PlayerEntity from "../../domain/entities/player";

export function convertToPlayerArray(playerModels: IPlayer[]): PlayerEntity[] {
  return playerModels.map(playerModel => new PlayerEntity(playerModel._id.toString(), playerModel.name));
}
