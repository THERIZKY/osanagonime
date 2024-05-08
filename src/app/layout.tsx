import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Providers from "./providers";
import type { Metadata, Viewport } from "next";

const inter = Inter({ subsets: ["latin"] });

// Metadata
export const metadata: Metadata = {
    title: "OsanagoManga",
    description: "Baca Manga Dan Nonton Anime dan jadilah Wibu yang baik",
    icons: {
        icon: "/img/osanagoTransparant.png",
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark">
            <body className={`${inter.className} bg-base-200`}>
                <Providers>{children}</Providers>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
