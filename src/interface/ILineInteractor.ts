import PlayerDTO from "../interactors/dto/player";

export interface LineWebhookRequest {
  destination: string;
  events: LineWebhookEvent[];
}

type richMenuText = "Today 3players" | "Weekly 3players" | "Monthly 3players" | "Today 4players" | "Weekly 4players" | "Monthly 4players"

export interface LineWebhookEvent {
  type: string;
  message: {
    type: string;
    id: string;
    quoteToken: string;
    text: richMenuText
  };
  webhookEventId: string;
  deliveryContext: {
    isRedelivery: boolean;
  };
  timestamp: number;
  source: {
    type: string;
    userId: string;
  };
  replyToken: string;
  mode: string;
}

export type params = {
  mode: string
  startDate: Date;
  endDate: Date;
};

export interface ILineInteractor {
  getScoresByDateAndMode(input: params): Promise<PlayerDTO[]>;
  replyMessage(replyToken: string, players: PlayerDTO[]): Promise<void>;
}
