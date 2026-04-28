import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { COOKIE_NAME, TOKEN_MAX_AGE } from "./constants";

function getSecret() {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error("JWT_SECRET not defined");
  return new TextEncoder().encode(secret);
}

export async function signToken(payload: { userId: string; email: string }) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${TOKEN_MAX_AGE}s`)
    .sign(getSecret());
}

export async function verifyToken(token: string) {
  const { payload } = await jwtVerify(token, getSecret());
  return payload as { userId: string; email: string };
}

export async function setAuthCookie(token: string) {
  (await cookies()).set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: TOKEN_MAX_AGE,
    path: "/",
  });
}

export async function clearAuthCookie() {
  (await cookies()).delete(COOKIE_NAME);
}

export async function getTokenFromCookies(): Promise<string | undefined> {
  return (await cookies()).get(COOKIE_NAME)?.value;
}

export async function getCurrentUser() {
  const token = await getTokenFromCookies();
  if (!token) return null;
  try {
    return await verifyToken(token);
  } catch {
    return null;
  }
}
