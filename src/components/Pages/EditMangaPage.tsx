"use client";

import "@/utils/firebase/read/services";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../Elements/Loading";

interface MangaData {
	id: string;
	deskripsi: string;
	idManga: number;
	mangaTitle: string;
	cover: string;
	slug: string;
	type: string;
}

const EditDataMangaPage = ({ id }: { id: string }) => {
	const [selectedManga, setSelectedManga] = useState<MangaData>();
	const [isLoading, setIsLoading] = useState<boolean>(true);
	useEffect(() => {
		const getSelectedManga = async () => {
			const res = await axios.get(`/api/manga/read?mangaid=${id}`);
			setSelectedManga(res.data.data[0]);
			setIsLoading(false);
		};
		getSelectedManga();
	}, []);
	return isLoading ? (
		<div className="flex justify-center items-center h-screen">
			<Loading />
		</div>
	) : (
		<>
			<div>
				<h1 className="text-white text-center text-3xl">
					Edit Data Manga
				</h1>

				<div className="flex justify-center ">
					<form method="post" className="flex flex-col gap-5 w-1/2">
						<label htmlFor="title">Title : </label>
						<input
							type="text"
							name="title"
							value={selectedManga?.mangaTitle}
						/>

						<label htmlFor="cover">Cover : </label>
						<input
							type="text"
							name="cover"
							value={selectedManga?.cover}
						/>

						<label htmlFor="deskripsi">Deskripsi : </label>
						<textarea name="deskripsi" id="deskripsi">
							{selectedManga?.deskripsi}
						</textarea>
					</form>
				</div>
			</div>
		</>
	);
};

export default EditDataMangaPage;
