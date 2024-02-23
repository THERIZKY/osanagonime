"use client";

import Loading from "@/app/(auth)/loading";
import Button from "@/components/Elements/Button/Buttons/Button";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const addMangaForm = () => {
	const [title, setTitle] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const { push } = useRouter();

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
			push("/admin/manga");
			setIsLoading(false);
		}
	};
	const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
	};

	return (
		<form method="post" className="flex flex-col items-center gap-5 bg-orange-200 w-[500px] rounded-xl p-5" onSubmit={(e) => submitHandler(e)}>
			<label htmlFor="title">Judul Manga</label>
			<input type="text" name="title" id="title" placeholder="Masukkan Judul Manga:" className="w-[300px] h-[40px] rounded-xl pl-5" onChange={handleTitleChange} />
			<Button disabled={isLoading} type="submit" className="btn bg-orange-500 ">
				Tambah
			</Button>
		</form>
	);
};

export default addMangaForm;
