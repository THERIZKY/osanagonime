"use client";

import "@/utils/firebase/read/services";
import { useEffect, useState } from "react";
import Loading from "../Elements/Loading";
import { useRouter } from "next/navigation";
import "slugify";
import slugify from "slugify";
import { stringify } from "querystring";

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

	const { push } = useRouter();

	useEffect(() => {
		const getSelectedManga = async () => {
			await fetch("/api/manga?idManga=" + id, {
				cache: "no-cache",
			})
				.then((res) => {
					return res.json();
				})
				.then((data) => {
					setSelectedManga(data.data);
					setIsLoading(false);
				})
				.catch((err) => {
					console.log(err);
				});
		};

		getSelectedManga();
	}, [id]);

	const submitHandler = async (formData: FormData) => {
		setIsLoading(true);

		const { title, cover, deskripsi }: any = Object.fromEntries(formData);

		const slug = slugify(title, { lower: true });

		if (title && cover && deskripsi) {
			try {
				await fetch("/api/manga/edit", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ id, title, cover, deskripsi, slug }),
				})
					.then(() => push("/admin/manga"))
					.catch((err) => console.error(err));
			} catch (err) {
				console.error(err);
			}
		}
	};

	return isLoading ? (
		<div className="flex justify-center items-center h-screen">
			<Loading />
		</div>
	) : (
		<>
			<div>
				<h1 className="text-white text-center text-3xl">Edit Data Manga</h1>

				<div className="flex justify-center ">
					<form method="post" className="flex flex-col gap-5 w-1/2" action={submitHandler}>
						<div className="form-control my-5">
							<div className="badge badge-accent mb-2">Title</div>
							<input type="text" defaultValue={selectedManga?.mangaTitle} name="title" className="input input-bordered input-success w-full" required />
						</div>

						<div className="form-control my-5">
							<div className="badge badge-accent mb-2">Cover</div>
							<input type="text" defaultValue={selectedManga?.cover || ""} name="cover" className="input input-bordered input-success w-full" required />
						</div>

						<div className="form-control my-5">
							<div className="badge badge-accent mb-2">Deskripsi</div>
							<textarea name="deskripsi" id="deskripsi" className="textarea textarea-success resize-none w-full h-[20rem]" placeholder="Bio">
								{selectedManga?.deskripsi}
							</textarea>
						</div>

						<button type="submit" className="btn btn-warning btn-md">
							Edit Data
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default EditDataMangaPage;
