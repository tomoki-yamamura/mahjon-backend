import { JWT } from "google-auth-library";
import env from "dotenv";
env.config();

const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const key = `${process.env.GOOGLE_PRIVATE_KEY}`.replace(/\\n/g, "\n");
export const sheetID: string = `${process.env.GOOGLE_SHEET_ID}`;

export const serviceAccountAuth = new JWT({
  email: email,
  key: key,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});
