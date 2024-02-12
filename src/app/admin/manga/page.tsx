"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import Loading from "@/components/Elements/Loading";
import Swal from "sweetalert2";
import { revalidatePath } from "next/cache";

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
	const { push, refresh } = useRouter();

	// State for Manga Data and Loading
	const [dataManga, setDataManga] = useState<MangaData[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isSidebarOn, setIsSidebarOn] = useState(false);

	// Handle Deletion of Manga
	const deleteHandler = async (id: string) => {
		try {
			const res = await axios.delete("/api/manga/drop", {
				data: JSON.stringify({
					id,
				}),
			});

			if (res.status === 200) {
				Swal.fire("Deleted!", "Manga Has Successfull Deleted.", "success").then(() => {
					// push("/admin/manga");
					window.location.reload();
					// refresh();
				});
			}
		} catch (error) {
			console.error("Error deleting manga", error);
			push("/admin/manga");
		}
	};

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
				deleteHandler(id);
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
						setDataManga(data.data);
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
	// return (
	// 	<>
	// 		<div className="flex flex-col items-center pb-7">
	// 			<h1 className="text-center text-3xl font-bold p-5 text-white">
	// 				Halaman Admin
	// 			</h1>

	// 			<div className="max-w-screen-xl w-[80%]  text-white overflow-x-auto">
	// 				<table className="animate__animated animate__fadeInDown w-full text-sm text-left text-gray-500 dark:text-gray-400">
	// 					<thead>
	// 						<tr>
	// 							<th>No</th>
	// 							<th>Cover</th>
	// 							<th>Judul</th>
	// 							<th>Deskripsi</th>
	// 							<th>Aksi</th>
	// 						</tr>
	// 					</thead>
	// 					<tbody>
	// 						{data.map((item: MangaData, index: number) => (
	// 							<tr
	// 								key={item.id}
	// 								className="animate__animated animate__fadeInDown border-y-2"
	// 							>
	// 								<td>{index + 1}</td>
	// 								<td className="flex items-center justify-center p-5 w-[250px]">
	// 									<Image
	// 										width={150}
	// 										height={150}
	// 										src={item.cover}
	// 										alt="cover-manga"
	// 										className="w-auto h-auto"
	// 									/>
	// 								</td>
	// 								<td className="w-60">{item.mangaTitle}</td>
	// 								<td className="p-8">{item.deskripsi}</td>

	// 								<td className="w-[250px]">
	// 									<div className="flex  justify-center gap-5">
	// 										<Link
	// 											href={
	// 												"/admin/manga/edit/" +
	// 												item.id
	// 											}
	// 											className="bg-yellow-500 text-white px-6 py-2 rounded-md
	// 									hover:bg-orange-200 hover:text-black active:bg-white"
	// 										>
	// 											Edit
	// 										</Link>
	// 										<button
	// 											className=" bg-red-600 text-white px-6 py-2 rounded-md active:bg-white hover:bg-orange-600 hover:text-white active:text-black"
	// 											onClick={() => {
	// 												setIsLoading(true);
	// 												confirmHandler(item.id);
	// 											}}
	// 										>
	// 											Delete
	// 										</button>
	// 									</div>
	// 								</td>
	// 							</tr>
	// 						))}
	// 					</tbody>
	// 				</table>
	// 			</div>

	// 			<Link
	// 				href="/admin/manga/add"
	// 				className="animate__animated animate__bounceIn animate__slow bg-blue-600 text-white mt-5 px-5 py-2 rounded-md hover:bg-blue-900 active:bg-white active:text-black"
	// 			>
	// 				Tambah Manga
	// 			</Link>
	// 		</div>
	// 	</>
	// );

	return (
		<>
			<div className="overflow-x-auto pt-10">
				<div className=" w-full flex justify-center">
					<table className="table  max-w-screen-xl">
						{/* head */}
						<thead>
							<tr>
								<th>
									<label>
										<input type="checkbox" className="checkbox" />
									</label>
								</th>
								<th>Name</th>
								<th>Description</th>
								{/* <th>Favorite Color</th> */}
								<th></th>
							</tr>
						</thead>
						<tbody>
							{/* row 1 */}
							{dataManga.map((item, index) => (
								<tr key={index} className="hover">
									<th>
										<label>
											<input type="checkbox" className="checkbox" />
										</label>
									</th>
									<td>
										<div className="flex items-center gap-3">
											<div className="avatar">
												<div className="w-20 h-28">
													<Image width={150} height={150} src={item.cover} alt="cover" />
												</div>
											</div>
											<div>
												<div className="font-bold">{item.mangaTitle}</div>
											</div>
										</div>
									</td>
									<td>{item.deskripsi}</td>
									{/* <td>Purple</td> */}
									<th>
										<div className="flex gap-5">
											<button className="btn btn-warning px-5" onClick={() => push(`/admin/manga/edit/${item.id}`)}>
												Edit
											</button>
											<button className="btn btn-error px-5" onClick={() => confirmHandler(item.id)}>
												Delete
											</button>
										</div>
									</th>
								</tr>
							))}
						</tbody>
						{/* foot */}
						<tfoot>
							<tr>
								<th></th>
								<th>Name</th>
								<th>Description</th>
								{/* <th>Favorite Color</th> */}
								<th></th>
							</tr>
						</tfoot>
					</table>
				</div>
			</div>
			<div className="w-full flex justify-center">
				<Link
					href="/admin/manga/add"
					className={`animate__animated animate__bounceIn animate__slow btn btn-primary`}
					onClick={() => {
						setIsLoading(true);
					}}
				>
					Tambah Manga
				</Link>
			</div>
		</>
	);
};

export default AdminManga;
