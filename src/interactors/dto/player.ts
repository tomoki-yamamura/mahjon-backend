import PlayerEntity from "../../domain/entities/player";

class PlayerDTO {
  readonly id: string;
  readonly name: string;
  constructor(player: PlayerEntity) {
    this.id = player.Id
    this.name = player.name
  } 
}

export default PlayerDTO;