"use client";
import React, { useEffect, useState } from "react";
import Loading from "@/components/Elements/Loading";
import { useRouter } from "next/navigation";

type ChapterType = {
	idChapter: string;
	mangaId: string;
	judulChapter: string;
	// judulManga: string;
	chapter: number;
	mangaRef: {
		idManga: string;
		mangaTitle: string;
		slug: string;
		deskripsi: string;
		published_at: string;
	};
};

const AdminChapter = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [dataChapter, setDataChapter] = useState<ChapterType[]>([]);

	const { push } = useRouter();

	// UseEffect untuk mengumpulkan semua data chapter
	useEffect(() => {
		const getChapter = async () => {
			try {
				await fetch(`/api/chapter?manga=include`, {
					cache: "force-cache",
					next: {
						revalidate: 10,
					},
				})
					.then(async (res) => {
						if (!res.ok) {
							throw new Error("Failed to fetch chapter data");
						}
						return await res.json();
					})
					.then((data) => {
						console.log(data.data);
						setDataChapter(data.data);
						setIsLoading(false);
					})
					.catch((error) => {
						console.error("Error fetching chapter data", error);
					});
			} catch (err) {
				console.error(err);
				setIsLoading(false);
			}
		};

		getChapter();
	}, []);

	return (
		<section className="dark p-3 sm:p-5">
			<div className="mx-auto max-w-screen-2xl px-4 lg:px-12">
				{/* Start coding here */}
				<div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
					{/* Header Table */}
					<div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
						<div className="w-full md:w-1/2">
							{/* Buat Search */}
							<form className="flex items-center">
								<label htmlFor="simple-search" className="sr-only">
									Search
								</label>
								<div className="relative w-full">
									<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
										<svg
											aria-hidden="true"
											className="w-5 h-5 text-gray-500 dark:text-gray-400"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
												clipRule="evenodd"
											/>
										</svg>
									</div>
									<input
										type="text"
										id="simple-search"
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
										placeholder="Search"
										required
									/>
								</div>
							</form>
							{/* akhir search */}
						</div>
						{/* Button add data */}
						<div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
							<button
								type="button"
								className="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
								disabled={isLoading}
								onClick={() => {
									setIsLoading(true);
									push("/admin/chapter/add");
								}}
							>
								{isLoading ? (
									""
								) : (
									<svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
										<path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
									</svg>
								)}
								{isLoading ? "Loading..." : "Add Chapter"}
							</button>
						</div>
					</div>

					{/* Bagian Bawah Table */}
					<div className="overflow-x-auto">
						<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
							<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
								<tr>
									<th scope="col" className="px-4 py-3">
										Judul Chapter
									</th>
									<th scope="col" className="px-4 py-3">
										Chapter
									</th>
									<th scope="col" className="px-4 py-3">
										Judul Manga
									</th>
									<th scope="col" className="px-4 py-3">
										Actions
									</th>
								</tr>
							</thead>

							{/* Body Table */}
							<tbody>
								{dataChapter.map((data, index) => {
									return (
										<tr key={index} className="border-b dark:border-gray-700">
											<th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
												{data?.judulChapter}
											</th>
											<td className="px-4 py-3">{data.chapter}</td>
											<td className="px-4 py-3">{data.mangaRef.mangaTitle}</td>

											<td className="px-4 py-3 flex items-center justify-start">
												<div className=" flex gap-6">
													<button className="flex justify-center items-center bg-warning w-[4rem] h-9 text-center rounded-lg  text-black transition duration-300 ease-in-out transform hover:scale-110 active:scale-100">
														Edit
													</button>

													<button className="flex justify-center items-center bg-danger w-[4rem] h-9 text-center rounded-lg  text-black transition duration-300 ease-in-out transform hover:scale-110 active:scale-100">
														Delete
													</button>
												</div>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AdminChapter;
