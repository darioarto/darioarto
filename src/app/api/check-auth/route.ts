import { NextRequest, NextResponse } from "next/server";
import * as cookie from "cookie";
import { AUTH_COOKIE, isValidAuthToken } from "@/utils/auth";

export async function GET(request: NextRequest) {
  const cookieHeader = request.headers.get("cookie") || "";
  const cookies = cookie.parse(cookieHeader);

  if (isValidAuthToken(cookies[AUTH_COOKIE])) {
    return NextResponse.json({ authenticated: true }, { status: 200 });
  } else {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }
}
