"use client";
import Navbar from "@/components/Layouts/Navbar";
import { usePathname } from "next/navigation";

export default function MangaListLayout({ children }: { children: React.ReactNode }) {
	const isChapterRoute = usePathname().split("/").length > 3;
	return (
		<>
			{isChapterRoute ? null : <Navbar />}
			{children}
		</>
	);
}
