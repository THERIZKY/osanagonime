import axios from "axios";
import Swal from "sweetalert2";
import { redirect } from "next/navigation";
import { getChapterByMangaId } from "../mysql/get/services";

/* ----------------Buat Halaman Admin Manga---------------------- */

// Ini Fungsi Buat Delete Handler biar rapih
const deleteManga = async (id: number) => {
	const res = await axios.delete("/api/manga/drop", {
		data: JSON.stringify({
			id,
		}),
	});

	if (res.data.status === 200) {
		Swal.fire("Deleted!", "Manga Has Successfull Deleted.", "success").then(() => {
			window.location.reload();
		});
	}

	if (res.data.status === 404) {
		Swal.fire("Not Found Manga", "Manga Dengan id " + id + "Tidak Ditemukan", "question");
	}
};

export const deleteHandler = async (id: number, callback: Function) => {
	// Ngecek Dlu Apakah Manga Ini Punya Chapter Yang Terhubung
	const res = await fetch(`/api/chapter?idChapter=${id}`);

	if (res.ok) {
		const chapterExists = await res.json();

		// Kalo Misal Kan Chapternya ada
		if (chapterExists.data !== null) {
			Swal.fire({
				title: "Ada Chapter Yang Masih!",
				text: "Apakah Anda Ingin Menghapus Semuanya?",
				icon: "warning",
				showCancelButton: true,
				confirmButtonColor: "#3085d6",
				cancelButtonColor: "#d33",
				confirmButtonText: "Yes!",
			}).then((result) => {
				if (result.isConfirmed) {
					deleteManga(id);
				} else {
					callback(false);
				}
			});
		} else {
			// Kalo Gak Ada Langsung Delete aja
			deleteManga(id);
		}
	}
};

export const confirmHandler = async (id: number, callback: Function) => {
	Swal.fire({
		title: "Are you sure?",
		text: "You won't be able to revert this!",
		icon: "warning",
		showCancelButton: true,
		confirmButtonColor: "#3085d6",
		cancelButtonColor: "#d33",
		confirmButtonText: "Yes, delete it!",
	}).then((result) => {
		if (result.isConfirmed) {
			deleteHandler(id, (loading: boolean) => callback(loading));
		} else {
			callback(false);
		}
	});
};

/* ---------------------------------------------------------------- */
