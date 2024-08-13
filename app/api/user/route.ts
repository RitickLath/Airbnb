import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ mes: "message from user" });
}
