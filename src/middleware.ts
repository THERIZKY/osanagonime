// import withAuth from "@/middlewares/withAuth";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
	const token = await getToken({ req, secret: "10042005" });

	if (!token) {
		const url = new URL("/login", req.url);
		url.searchParams.set("callbackUrl", encodeURI(req.url));
		return NextResponse.redirect(url);
	}

	if (token.role !== "admin") {
		return NextResponse.redirect(new URL("/", req.url));
	}

	if (req.nextUrl.pathname === "/login") {
		return NextResponse.redirect(new URL("/admin", req.url));
	}
}

export const config = {
	matcher: ["/admin/:path*"],
};

// export default withAuth(mainMiddleware, ["/admin"]);
