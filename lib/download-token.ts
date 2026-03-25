import crypto from "crypto";

const secret = process.env.DOWNLOAD_TOKEN_SECRET || "dev-secret-change-me";

type Payload = {
  sessionId: string;
  exp: number;
};

export function createDownloadToken(sessionId: string, expiresInMinutes = 60) {
  const payload: Payload = {
    sessionId,
    exp: Date.now() + expiresInMinutes * 60 * 1000
  };

  const encoded = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const sig = crypto.createHmac("sha256", secret).update(encoded).digest("base64url");
  return `${encoded}.${sig}`;
}

export function verifyDownloadToken(token: string): Payload | null {
  const [encoded, sig] = token.split(".");
  if (!encoded || !sig) return null;

  const expected = crypto.createHmac("sha256", secret).update(encoded).digest("base64url");
  if (!crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return null;

  const payload = JSON.parse(Buffer.from(encoded, "base64url").toString()) as Payload;
  if (!payload.exp || payload.exp < Date.now()) return null;

  return payload;
}
