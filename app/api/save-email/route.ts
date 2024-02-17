import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import { NextResponse } from "next/server";

const appendSpreadsheet = async (row: { name: string; email: string; date: Date }) => {
  const jwt = new JWT({
    email: process.env["GOOGLE_SHEETS_CLIENT_EMAIL"],
    key: (process.env["GOOGLE_SHEETS_PRIVATE_KEY"] || "").replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const doc = new GoogleSpreadsheet(process.env["SPREADSHEET_ID"]!, jwt);

  await doc.loadInfo();

  const sheet = doc.sheetsById[Number(process.env["SHEET_ID"])];
  return await sheet.addRow(row);
};

export async function POST(Request: Request) {
  try {
    const { name, email } = await Request.json();
    await appendSpreadsheet({ name, email, date: new Date() });

    return NextResponse.json({ status: 201 });
  } catch (error) {
    console.log(error);

    return Response.json({ error, status: 500 });
  }
}
