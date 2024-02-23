"use client";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useState } from "react";

export default function MangaLayout({ children, navigation }: { children: React.ReactNode; navigation: React.ReactNode }) {
	const pathname = usePathname();
	const pathParts = pathname.split("/").filter(Boolean); // Menghapus string kosong

	// Mengecek apakah path memiliki format yang sesuai
	const isChapterPage = pathParts.length === 3 && pathParts[0] === "manga";

	const [showNavigation, setShowNavigation] = useState<boolean>(false);

	useEffect(() => {
		let timer: NodeJS.Timeout;
		if (isChapterPage) {
			timer = setTimeout(() => {
				setShowNavigation(true);
			}, 1200); // Waktu cooldown dalam milidetik (1000 ms = 1 detik)
		}

		return () => clearTimeout(timer); // Membersihkan timeout jika komponen unmount
	}, [isChapterPage]);

	return (
		<Fragment>
			<div className="flex flex-col">
				<div className={isChapterPage ? "pb-[4rem]" : ""}>{children}</div>

				{showNavigation && isChapterPage && <div>{navigation}</div>}
			</div>
		</Fragment>
	);
}
