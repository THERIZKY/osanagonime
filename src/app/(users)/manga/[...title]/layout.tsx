"use client";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

export default function MangaLayout({
	children,
	navigation,
}: {
	children: React.ReactNode;
	navigation: React.ReactNode;
}) {
	const pathname = usePathname();
	// Memisahkan path URL menjadi bagian-bagian yang sesuai
	const pathParts = pathname.split("/").filter(Boolean); // Menghapus string kosong

	// Mengecek apakah path memiliki format yang sesuai
	const isChapterPage = pathParts.length === 3 && pathParts[0] === "manga";

	return (
		<Fragment>
			<div className="flex flex-col">
				<div className="pb-[4rem]">{children}</div>
				{isChapterPage && <div>{navigation}</div>}
			</div>
		</Fragment>
	);
}
