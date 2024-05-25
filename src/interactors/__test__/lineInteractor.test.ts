import 'reflect-metadata';
import { IMessageSender } from "../../domain/interface/line/IMessageSender";
import { IPlayerRepository } from "../../domain/interface/repository/IPlayerRepository";
import * as fixtureEntities from "../../domain/entities/__tests__/fixture/index";
import { LineInteractor } from "../lineInteractor";
import Player from '../../domain/entities/player';
import PlayedDate from '../../domain/value/date';
import PlayMode from '../../domain/value/mode';

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
      startDate: new Date(),
      endDate: new Date(),
    }
    const dummyPlayers: Player[] = [fixtureEntities.player]

    playerRepositoryMock.getPlayersByModeAndDate.mockResolvedValue(dummyPlayers);
    
    await interactor.sendScoreToPlayer(input);

    const vmode = new PlayMode(input.mode);
    const vstartDate = new PlayedDate(input.startDate);
    const vendDate = new PlayedDate(input.endDate);
    
    expect(playerRepositoryMock.getPlayersByModeAndDate).toHaveBeenCalledWith(vmode, vstartDate, vendDate);
    expect(messageSenderMock.replyMessage).toHaveBeenCalledWith(input.replyToken, dummyPlayers);
  });
});
