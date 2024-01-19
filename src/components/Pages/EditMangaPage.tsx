"use client";

import "@/utils/firebase/read/services";
import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
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
			const res = await axios.get(`/api/manga?documentId=${id}`);
			setSelectedManga(res.data.data[0]);
			setIsLoading(false);
		};
		getSelectedManga();
	}, [id]);

	const submitHandler = async (formData: FormData) => {
		const title = formData.get("title");
		const cover = formData.get("cover");
		const deskripsi = formData.get("deskripsi");

		if (title && cover && deskripsi) {
			if (
				title !== selectedManga?.mangaTitle ||
				cover !== selectedManga?.cover ||
				deskripsi !== selectedManga?.deskripsi
			) {
				try {
					const res = await fetch("/api/add", {
						method: "POST",
						body: JSON.stringify({
							title,
							cover,
							deskripsi,
						}),
					});
				} catch (err) {
					console.error(err);
				}
			}
		}
		console.log(selectedManga);
	};

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
					<form
						method="post"
						className="flex flex-col gap-5 w-1/2"
						action={submitHandler}
					>
						<div className="form-control my-5">
							<div className="badge badge-accent mb-2">Title</div>
							<input
								type="text"
								placeholder="Type here"
								name="title"
								className="input input-bordered input-success w-full"
								value={selectedManga?.mangaTitle}
							/>
						</div>

						<div className="form-control my-5">
							<div className="badge badge-accent mb-2">Cover</div>
							<input
								type="text"
								placeholder="Type here"
								name="cover"
								className="input input-bordered input-success w-full"
								value={selectedManga?.cover}
							/>
						</div>

						<div className="form-control my-5">
							<div className="badge badge-accent mb-2">
								Deskripsi
							</div>
							<textarea
								name="deskripsi"
								id="deskripsi"
								className="textarea textarea-success resize-none w-full h-[20rem]"
								placeholder="Bio"
							>
								{selectedManga?.deskripsi}
							</textarea>
						</div>

						<button
							type="submit"
							className="btn btn-warning btn-md"
						>
							Edit Data
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default EditDataMangaPage;
