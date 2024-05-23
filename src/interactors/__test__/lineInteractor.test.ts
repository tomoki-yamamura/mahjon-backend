import 'reflect-metadata';
import { IMessageSender } from "../../domain/interface/line/IMessageSender";
import { IPlayerRepository } from "../../domain/interface/repository/IPlayerRepository";
import * as fixtureEntities from "../../domain/entities/__tests__/fixture/index";
import PlayerDTO from "../dto/player";
import { LineInteractor } from "../lineInteractor";
import Player from '../../domain/entities/player';
import { fixDate, mode3players, oneSecLaterDate } from '../../domain/value/__tests__/fixture';

describe('LineInteractor', () => {
  let interactor: LineInteractor;
  let playerRepositoryMock: jest.Mocked<IPlayerRepository>;
  let messageSenderMock: jest.Mocked<IMessageSender>;

  beforeEach(() => {

    playerRepositoryMock = {
      getAllPlayers: jest.fn(),
      getPlayersByModeAndDate: jest.fn(),
    } as jest.Mocked<IPlayerRepository>;

    messageSenderMock = {
      replyMessage: jest.fn(),
    } as jest.Mocked<IMessageSender>;

    interactor = new LineInteractor(playerRepositoryMock, messageSenderMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('replyMessage should call messageSender.replyMessage with correct arguments', async () => {
    const replyToken = 'dummyReplyToken';
    const playerDTOs: PlayerDTO[] = [new PlayerDTO(fixtureEntities.player)];

    await interactor.replyMessage(replyToken, playerDTOs);

    expect(messageSenderMock.replyMessage).toHaveBeenCalledWith(replyToken, [fixtureEntities.player]);
  });

  it('getScoresByDateAndMode should return correct PlayerDTOs', async () => {

    const mode = mode3players.getMode();
    const startDate = fixDate.getDate();
    const endDate = oneSecLaterDate.getDate();
    const players: Player[] = [fixtureEntities.player]

    playerRepositoryMock.getPlayersByModeAndDate.mockResolvedValue(players);

    const result = await interactor.getScoresByDateAndMode({ mode, startDate, endDate });

    expect(playerRepositoryMock.getPlayersByModeAndDate).toHaveBeenCalledWith(mode3players, fixDate, oneSecLaterDate)
  });
});
