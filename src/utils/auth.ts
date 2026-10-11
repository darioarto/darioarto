import { createHmac, timingSafeEqual } from "crypto";

export const AUTH_COOKIE = "authToken";

// Token derived from the password, so it can't be forged without knowing it
// and is invalidated automatically when the password changes.
export function getAuthToken(password: string) {
  return createHmac("sha256", password).update("page-access").digest("hex");
}

export function isValidAuthToken(token: string | undefined) {
  const password = process.env.PAGE_ACCESS_PASSWORD;
  if (!password || !token) return false;

  const expected = Buffer.from(getAuthToken(password));
  const received = Buffer.from(token);
  return expected.length === received.length && timingSafeEqual(expected, received);
}
