import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { withAuth } from "next-auth/middleware";

export default function middleware(req: NextRequest) {}

export const config = {
    matcher: ["/admin/:path*"],
};
