"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import "animate.css";
import { SessionProvider } from "next-auth/react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<title>OsanagoManga</title>
				<link rel="icon" href="/img/osanagoTransparant.png" />

				{/* Metadata */}
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="viewport" content="viewport-fit=cover" />
				<meta name="description" content="Baca Manga Dan Nonton Anime dan jadilah Wibu yang baik" />
			</head>
			<body className={inter.className}>
				<SessionProvider>{children}</SessionProvider>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
