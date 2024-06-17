import 'reflect-metadata';
import { IMessageSender } from "../../domain/interface/line/IMessageSender";
import { IPlayerRepository } from "../../domain/interface/repository/IPlayerRepository";
import * as fixtureEntities from "../../domain/entities/__tests__/fixture/index";
import * as fixtureValues from "../../domain/value/__tests__/fixture/index";
import { LineInteractor } from "../lineInteractor";
import PlayedDate from '../../domain/value/date';
import PlayMode from '../../domain/value/mode';
import PlayerList from '../../domain/collection/playerList';

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
      showLoadingAnimation: jest.fn(),
    } as jest.Mocked<IMessageSender>;

    interactor = new LineInteractor(playerRepositoryMock, messageSenderMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('sendScoreToPlayerInput should call correct sequence and with correct arguments', async () => {
    const input = {
      replyToken: 'dummyReplyToken',
      userId: 'dummyUserId',
      mode: '3players',
      startDate: fixtureValues.fixDate.getDate(),
      endDate: fixtureValues.fixDate.getDate(),
    }
    const dummyPlayers: PlayerList = new PlayerList([fixtureEntities.player])

    playerRepositoryMock.getAllPlayers.mockResolvedValue(dummyPlayers);
    
    await interactor.sendScoreToPlayer(input);

    expect(playerRepositoryMock.getAllPlayers).toHaveBeenCalled();
    expect(messageSenderMock.replyMessage).toHaveBeenCalledWith(input.replyToken, dummyPlayers);
  });
});
