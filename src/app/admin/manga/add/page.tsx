"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { json } from "stream/consumers";

const AddDataManga = () => {
	const [title, setTitle] = useStatej;
	const submitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// console.log(title);

		fetch("/api/manga", {
			method: "POST",
			body: JSON.stringify({
				title,
			}),
		});

		// const data = await responses.json();

		// console.log(responses);
	};

	const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
	};
	return (
		<>
			<div className="w-screen h-screen bg-slate-600">
				<div className="flex flex-col items-center">
					<h1 className="text-white text-center text-3xl font-bold py-3">
						Tambah Data Manga
					</h1>
					<div className=" w-3/4 flex flex-col items-center gap-10">
						<form
							method="post"
							className="flex flex-col items-center gap-5 bg-orange-200 w-[500px] rounded-xl p-5"
							onSubmit={submitHandler}
						>
							<label htmlFor="title">Judul Manga</label>
							<input
								type="text"
								name="title"
								id="title"
								placeholder="Masukkan Judul Manga:"
								className="w-[300px] h-[40px] rounded-xl pl-5"
								onChange={handleTitleChange}
							/>
							<button
								type="submit"
								className="bg-orange-500 px-5 py-2 rounded"
							>
								Tambah
							</button>
						</form>
						<Link
							href={"/admin/manga"}
							className="bg-blue-600 px-5 py-2 rounded"
						>
							Tambah Manga
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default AddDataManga;
