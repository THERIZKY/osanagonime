"use client";
import Footer from "@/components/Layouts/Footer";
import Navbar from "@/components/Layouts/Navbar";
import { usePathname } from "next/navigation";

export default function MangaListLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const isChapterRoute = usePathname().split("/").length > 3;
    const isGenreRoute = usePathname() === "/manga/genre";

    return (
        <>
            <div className="flex flex-col min-h-screen justify-between">
                {isChapterRoute || isGenreRoute ? null : <Navbar />}
                <div className="overflow-hidden">
                    {children}
                    {isChapterRoute || isGenreRoute ? null : <Footer />}
                </div>
            </div>
        </>
    );
}
