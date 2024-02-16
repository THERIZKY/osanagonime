"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Loading from "@/components/Elements/Loading";
import { confirmHandler } from "@/utils/function/function";
import { setTimeout } from "timers/promises";

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
	const { push } = useRouter();

	// State for Manga Data and Loading
	const [dataManga, setDataManga] = useState<MangaData[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isSidebarOn, setIsSidebarOn] = useState(false);

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
								{/* <th>Jumlah Chapter</th> */}
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
									{/* {description.slice(0, 97)}... */}
									<td>{item.deskripsi}</td>
									{/* <td>1</td> */}
									<th>
										<div className="flex gap-5">
											<button className="btn btn-warning px-5" onClick={() => push(`/admin/manga/edit/${item.idManga}`)}>
												Edit
											</button>
											<button
												className="btn btn-error px-5"
												onClick={() => {
													setIsLoading(true);
													confirmHandler(item.idManga, (loading: boolean) => {
														setIsLoading(loading);
													});
												}}
											>
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
