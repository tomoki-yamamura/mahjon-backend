import { JWT } from "google-auth-library";
import env from "dotenv";
import { GoogleSpreadsheet } from "google-spreadsheet";
env.config();

const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const key = `${process.env.GOOGLE_PRIVATE_KEY}`.replace(/\\n/g, "\n");
const sheetID: string = `${process.env.GOOGLE_SHEET_ID}`;

const serviceAccountAuth = new JWT({
  email: email,
  key: key,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const googleSpreadSheetDoc = new GoogleSpreadsheet(sheetID, serviceAccountAuth)
export default googleSpreadSheetDoc
