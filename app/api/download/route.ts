import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";
import { verifyDownloadToken } from "@/lib/download-token";
import { getStripeServer } from "@/lib/stripe";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");
  if (!token) {
    return new NextResponse("Missing token.", { status: 400 });
  }

  const payload = verifyDownloadToken(token);
  if (!payload) {
    return new NextResponse("Invalid or expired token.", { status: 403 });
  }

  const stripe = getStripeServer();
  const session = await stripe.checkout.sessions.retrieve(payload.sessionId);
  if (session.payment_status !== "paid") {
    return new NextResponse("Payment not verified.", { status: 403 });
  }

  const relativePath = process.env.PRODUCT_FILE_PATH || "private-assets/social-intelligence-cheat-sheet.pdf";
  const filePath = path.join(process.cwd(), relativePath);

  if (!fs.existsSync(filePath)) {
    return new NextResponse("Product file not found.", { status: 404 });
  }

  const filename = process.env.PRODUCT_DOWNLOAD_FILENAME || "Social-Intelligence-Cheat-Sheet.pdf";
  const fileBuffer = fs.readFileSync(filePath);

  return new NextResponse(fileBuffer, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Cache-Control": "private, no-store"
    }
  });
}
