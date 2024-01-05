"use client";
import "./globals.css";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "animate.css";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<title>OsanagoNimek</title>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="description"
					content="Nonton Lah Anime Dan jadilah wibu"
				/>
			</head>
			<body className={inter.className}>
				<SessionProvider>{children}</SessionProvider>
			</body>
		</html>
	);
}
