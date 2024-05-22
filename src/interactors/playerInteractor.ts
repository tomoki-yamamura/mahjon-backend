import { inject, injectable } from "inversify";
import TYPES from "../config/inversity.types";
import { IPlayerInteractor } from "../interface/IPlayerInteractor";
import PlayerDTO from "./dto/player";
import { IPlayerRepository } from "../domain/interface/repository/IPlayerRepository";

@injectable()
export class PlayerInteractor implements IPlayerInteractor {
  private repository: IPlayerRepository;
  constructor(@inject(TYPES.PlayerRepository) repository: IPlayerRepository) {
    this.repository = repository;
  }
  async getAllPlayers(): Promise<PlayerDTO[]> {
    const players = await this.repository.getAllPlayers()
    const playerDTOs = players.map((player) => new PlayerDTO(player)); 
    return playerDTOs
  }
}
