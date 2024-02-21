"use client";
import { redirect } from "next/navigation";
import AddChapterPage from "@/components/Pages/Chapter/Admin/AddChapterPage";
import EditChapterPage from "@/components/Pages/Chapter/Admin/EditChapterPage";
import { useEffect, useState } from "react";

interface interfaceChapterPage {
	params: {
		type: string;
	};
}

const HandlerChapterPage = ({ params }: interfaceChapterPage) => {
	const { type } = params;
	const [dataManga, setDataManga] = useState<any>([]);

	useEffect(() => {
		const fetchDataManga = async () => {
			try {
				await fetch("/api/manga")
					.then(async (res) => {
						if (!res.ok) {
							throw new Error("Failed to fetch manga data");
						}
						return res.json();
					})
					.then((data) => {
						setDataManga(data.data);
					})
					.catch((error) => {
						console.error("Error fetching manga data", error);
					});
			} catch (error) {
				console.error("Error fetching manga data", error);
			}
		};

		fetchDataManga();
	}, []);

	console.log(dataManga);

	switch (type[0]) {
		case "add":
			return <AddChapterPage dataManga={dataManga} />;
		case "edit":
			return <EditChapterPage dataManga={dataManga} />;
		default:
			return redirect("/admin/chapter");
	}
};

export default HandlerChapterPage;
