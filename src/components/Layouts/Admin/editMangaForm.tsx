"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import slugify from "slugify";
import Button from "@/components/Elements/Button/Buttons/Button";
import { revalidatePath } from "next/cache";

const EditMangaForm = ({ selectedManga, id }: any) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const { push } = useRouter();

	const submitHandler = async (formData: FormData) => {
		setIsLoading(true);

		const { title, cover, deskripsi }: any = Object.fromEntries(formData);

		const slug = slugify(title, { lower: true });

		if (title && cover && deskripsi) {
			await fetch("/api/manga/edit", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ id, title, cover, deskripsi, slug }),
			})
				.then(() => {
					push("/admin/manga");
					revalidatePath("/admin/manga");
				})
				.catch((err) => console.error(err));
		}
	};

	return (
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

			<Button disabled={isLoading} type="submit" className="btn btn-warning btn-md">
				Edit Data
			</Button>
		</form>
	);
};

export default EditMangaForm;
