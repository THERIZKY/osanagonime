"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Swal from "sweetalert2";

const DeleteDataMangaPage = ({ id }: { id: string }) => {
	const router = useRouter();
	useEffect(() => {
		const deleteHandler = async (id: string) => {
			try {
				const res = await axios.delete("/api/manga/drop", {
					data: JSON.stringify({
						id,
					}),
				});

				if (res.status === 200) {
					Swal.fire(
						"Deleted!",
						"Manga Has Successfull Deleted.",
						"success",
					).then(() => {
						router.push("/admin/manga");
					});
				}
			} catch (error) {
				console.error("Error deleting manga", error);
				router.push("/admin/manga");
			}
		};
		deleteHandler(id);
	}, [id, router]);

	return <></>;
};

export default DeleteDataMangaPage;
