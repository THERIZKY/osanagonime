import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { useSession } from "next-auth/react";

export default function middleware(req: NextRequest) {
	return;
	// return NextResponse.redirect(new URL("/login", req.url));
}
