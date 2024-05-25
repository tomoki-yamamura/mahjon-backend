type richMenuText = "Today 3players" | "Weekly 3players" | "Monthly 3players" | "Today 4players" | "Weekly 4players" | "Monthly 4players"

interface LineWebhookEvent {
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

export interface LineWebhookRequest {
  destination: string;
  events: LineWebhookEvent[];
}

export type sendScoreToPlayerInput = {
  replyToken: string;
  userId: string;
  mode: string;
  startDate: Date;
  endDate: Date;
}

export interface ILineInteractor {
  sendScoreToPlayer(input: sendScoreToPlayerInput): Promise<void>
}
