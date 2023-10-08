"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Loading from "@/components/Elements/Loading";

interface MangaData {
	id: string;
	deskripsi: string;
	idManga: number;
	mangaTitle: string;
	cover: string;
	slug: string;
	type: string;
}

const AdminManga = () => {
	const router = useRouter();

	// State for Manga Data and Loading
	const [data, setData] = useState<MangaData[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	// Handle Deletion of Manga
	const deleteHandler = async (id: string) => {
		const conf = confirm("Apakah Anda Yakin?");

		if (conf) {
			try {
				const res = await axios.delete("/api/manga/drop", {
					data: JSON.stringify({
						id,
					}),
				});

				if (res.status === 200) {
					console.log("Manga deleted successfully");
					// setIsLoading(false);
					router.push("/temp");
				}
			} catch (error) {
				console.error("Error deleting manga", error);
			}
		} else {
			setIsLoading(false);
		}
	};

	// Fetch Manga Data on Component Mount
	useEffect(() => {
		const getDataManga = async () => {
			try {
				const res = await fetch("/api/manga/read");
				const data = await res.json();
				setData(data.data);
				setIsLoading(false);
			} catch (error) {
				console.error("Error fetching manga data", error);
			}
		};

		getDataManga();
	}, []);

	// Render Loading Screen if Data is Loading
	if (isLoading) {
		return (
			<div className="flex justify-center items-center h-screen gap-10 bg-slate-600">
				<Loading />
			</div>
		);
	}

	// Render Manga Data Table
	return (
		<div className="w-full min-h-screen bg-slate-600">
			<div className="flex flex-col items-center pb-7">
				<h1 className="text-center text-3xl font-bold p-5 text-white">
					Halaman Admin
				</h1>
				<table className="border-y-2 w-3/4 text-center text-white">
					<thead>
						<tr>
							<th>No</th>
							<th>Cover</th>
							<th>Judul</th>
							<th>Deskripsi</th>
							<th>Aksi</th>
						</tr>
					</thead>
					<tbody>
						{data.map((item: MangaData, index: number) => (
							<tr key={item.id} className="border-y-2">
								<td>{index + 1}</td>
								<td className="flex items-center justify-center p-5 w-[250px]">
									<Image
										width={150}
										height={150}
										src={item.cover}
										alt="cover-manga"
									/>
								</td>
								<td className="w-60">{item.mangaTitle}</td>
								<td className="p-8">{item.deskripsi}</td>

								<td className="w-[250px]">
									<div className="flex justify-center gap-5">
										<Link
											href={
												"/admin/manga/edit?id=" +
												item.id
											}
											className="bg-yellow-500 text-white px-6 py-2 rounded-md"
										>
											Edit
										</Link>
										<button
											className="bg-red-600 text-white px-6 py-2 rounded-md active:bg-white hover:bg-orange-600 hover:text-white"
											onClick={() => {
												setIsLoading(true);
												deleteHandler(item.id);
											}}
										>
											Delete
										</button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>

				<Link
					href="/admin/manga/add"
					className="bg-blue-600 text-white mt-5 px-5 py-2 rounded-md"
				>
					Tambah Manga
				</Link>
			</div>
		</div>
	);
};

export default AdminManga;
