import PlayerList from '../../collection/playerList'

export interface IPlayerRepository {
  getAllPlayers(): Promise<PlayerList>
}
