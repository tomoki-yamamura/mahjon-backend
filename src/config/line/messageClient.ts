import { messagingApi } from '@line/bot-sdk';
const { MessagingApiClient } = messagingApi;
import env from "dotenv";
env.config();

const lineClient = new MessagingApiClient({
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN as string,
})

export default lineClient