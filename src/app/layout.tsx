import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "animate.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "OsanagoNimek",
	description: "Nonton Lah Anime Dan jadilah wibu",
};
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
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
