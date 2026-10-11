import { NextRequest, NextResponse } from "next/server";
import * as cookie from "cookie";
import { AUTH_COOKIE, getAuthToken } from "@/utils/auth";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => ({}));
  const { password } = body;
  const correctPassword = process.env.PAGE_ACCESS_PASSWORD;

  if (!correctPassword) {
    console.error('PAGE_ACCESS_PASSWORD environment variable is not set');
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }

  if (password === correctPassword) {
    const response = NextResponse.json({ success: true }, { status: 200 });
    
    response.headers.set(
      "Set-Cookie",
      cookie.serialize(AUTH_COOKIE, getAuthToken(correctPassword), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60,
        sameSite: "strict",
        path: "/",
      })
    );

    return response;
  } else {
    return NextResponse.json({ message: "Contraseña incorrecta" }, { status: 401 });
  }
}
