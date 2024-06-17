import 'reflect-metadata'
import { IPlayerRepository } from '../../domain/interface/repository/IPlayerRepository'
import * as fixtureEntities from '../../domain/entities/__tests__/fixture/index'
import Player from '../../domain/entities/player'
import { PlayerInteractor } from '../playerInteractor'
import { constructPlayerDTO } from '../factory/input/playerTotalPoint'
import PlayerList from '../../domain/collection/playerList'

describe('PlayerInteractor', () => {
  let interactor: PlayerInteractor
  let playerRepositoryMock: jest.Mocked<IPlayerRepository>

  beforeEach(() => {
    playerRepositoryMock = {
      getAllPlayers: jest.fn(),
      getPlayersByModeAndDate: jest.fn(),
    } as jest.Mocked<IPlayerRepository>

    interactor = new PlayerInteractor(playerRepositoryMock)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('getAllPlayers should be called', async () => {
    const players: Player[] = [fixtureEntities.player]
    playerRepositoryMock.getAllPlayers.mockResolvedValue(
      new PlayerList(players),
    )
    const result = await interactor.getAllPlayers()
    expect(playerRepositoryMock.getAllPlayers).toHaveBeenCalled()
    expect(result).toEqual([constructPlayerDTO(fixtureEntities.player)])
  })
})
