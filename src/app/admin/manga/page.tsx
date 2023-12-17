"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter, redirect, permanentRedirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Loading from "@/components/Elements/Loading";
import Swal from "sweetalert2";

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

	const confirmHandler = async (id: string) => {
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
				router.push(`/admin/manga/delete/${id}`);
			} else {
				setIsLoading(false);
			}
		});
	};

	// Fetch Manga Data on Component Mount
	useEffect(() => {
		const getDataManga = async () => {
			try {
				await fetch("/api/manga", {
					method: "GET",
					cache: "force-cache",
					next: {
						revalidate: 10,
					},
				})
					.then(async (res) => {
						if (!res.ok) {
							throw new Error("Failed to fetch manga data");
						}
						return res.json();
					})
					.then((data) => {
						// console.log(data.data);
						setData(data.data);
						setIsLoading(false);
					})
					.catch((error) => {
						console.error("Error fetching manga data", error);
					});
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
		<div className="flex flex-col items-center pb-7">
			<h1 className="text-center text-3xl font-bold p-5 text-white">
				Halaman Admin
			</h1>

			<div className="max-w-screen-xl w-[80%]  text-white overflow-x-auto">
				<table className="animate__animated animate__fadeInDown w-full text-sm text-left text-gray-500 dark:text-gray-400">
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
							<tr
								key={item.id}
								className="animate__animated animate__fadeInDown border-y-2"
							>
								<td>{index + 1}</td>
								<td className="flex items-center justify-center p-5 w-[250px]">
									<Image
										width={150}
										height={150}
										src={item.cover}
										alt="cover-manga"
										className="w-auto h-auto"
									/>
								</td>
								<td className="w-60">{item.mangaTitle}</td>
								<td className="p-8">{item.deskripsi}</td>

								<td className="w-[250px]">
									<div className="flex  justify-center gap-5">
										<Link
											href={
												"/admin/manga/edit/" + item.id
											}
											className="bg-yellow-500 text-white px-6 py-2 rounded-md
										hover:bg-orange-200 hover:text-black active:bg-white"
										>
											Edit
										</Link>
										<button
											className=" bg-red-600 text-white px-6 py-2 rounded-md active:bg-white hover:bg-orange-600 hover:text-white active:text-black"
											onClick={() => {
												setIsLoading(true);
												confirmHandler(item.id);
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
			</div>

			<Link
				href="/admin/manga/add"
				className="animate__animated animate__bounceIn animate__slow bg-blue-600 text-white mt-5 px-5 py-2 rounded-md hover:bg-blue-900 active:bg-white active:text-black"
			>
				Tambah Manga
			</Link>
		</div>
	);
};

export default AdminManga;
