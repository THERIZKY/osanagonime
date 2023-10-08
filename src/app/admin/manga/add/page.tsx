"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const axios = require("axios");

// Import component
import Loading from "@/components/Elements/Loading";

const AddDataManga = () => {
	const [title, setTitle] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const submitHandler = async (e: any) => {
		e.preventDefault();

		setIsLoading(true);

		const res = await axios({
			method: "POST",
			url: "/api/manga/add",
			headers: {
				"Content-Type": "application/json",
			},
			data: JSON.stringify({
				title,
			}),
		});

		if (res.status === 200) {
			router.push("/admin/manga");
			setIsLoading(false);
		}
	};

	const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
	};
	return isLoading ? (
		<div className="flex justify-center items-center h-screen gap-10 bg-slate-600">
			<Loading />
		</div>
	) : (
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
							onSubmit={(e) => submitHandler(e)}
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
							Back To Manga List
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default AddDataManga;
