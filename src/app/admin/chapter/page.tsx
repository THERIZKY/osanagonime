"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "@/components/Elements/Loading";
import { getMangaById } from "@/utils/firebase/read/services";
type ChapterType = {
	id: string;
	idManga: string;
	judul: string;
	chapter: number;
	mangaTitle?: string; // Ini adalah opsi jika Anda ingin menambahkan judul manga
};

const AdminChapter = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [dataChapter, setDataChapter] = useState<ChapterType[]>([]);
	const [mangaCache, setMangaCache] = useState<ChapterType[]>([]);

	// UseEffect untuk mengumpulkan semua data chapter
	useEffect(() => {
		const getChapter = async () => {
			try {
				const res = await axios.get("/api/chapter/read");
				// const res = await axios.get("/api/testing");
				console.log(res.data.data);
				setDataChapter(res.data.data);
				setIsLoading(false);
			} catch (err) {
				console.error(err);
				setIsLoading(false);
			}
		};

		getChapter();
	}, []);

	// useEffect(() => {
	// 	// Fungsi untuk mengambil data manga berdasarkan id
	// 	const getMangaById = async (idManga: any) => {
	// 		if (mangaCache[idManga]) {
	// 			// Mengambil data dari cache
	// 			return mangaCache[idManga];
	// 		} else {
	// 			// Melakukan panggilan ke API
	// 			try {
	// 				const res = await axios.get(`/api/manga/read`, {
	// 					params: {
	// 						idManga: idManga,
	// 					},
	// 				});
	// 				const mangaData = res.data.data[0];
	// 				// Menyimpan data ke cache
	// 				setMangaCache((prevCache) => ({
	// 					...prevCache,
	// 					[idManga]: mangaData,
	// 				}));
	// 				console.log(mangaData);
	// 				return mangaData;
	// 			} catch (err) {
	// 				console.error(err);
	// 			}
	// 		}
	// 	};

	// 	// Buat Nyari Manga Title
	// 	const fetchMangaTitles = async () => {
	// 		const chapterData = [...dataChapter];

	// 		const promises = chapterData.map(async (chapter) => {
	// 			const mangaData = await getMangaById(chapter.idManga);
	// 			chapter.mangaTitle = mangaData[0]?.mangaTitle;
	// 		});

	// 		await Promise.all(promises);

	// 		setDataChapter(chapterData);
	// 	};

	// 	fetchMangaTitles();
	// }, [dataChapter, mangaCache]);

	if (isLoading) {
		return (
			<div className="flex justify-center items-center h-screen gap-10 bg-slate-600">
				<Loading />
			</div>
		);
	}

	console.log(dataChapter);
	return (
		<section className="dark dark:bg-gray-900 p-3 sm:p-5">
			<div className="mx-auto max-w-screen-xl px-4 lg:px-12">
				{/* Start coding here */}
				<div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
					<div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
						<div className="w-full md:w-1/2">
							{/* Buat Search */}
							<form className="flex items-center">
								<label
									htmlFor="simple-search"
									className="sr-only"
								>
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
						<div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
							{/* Button add data */}
							<button
								type="button"
								className="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
							>
								<svg
									className="h-3.5 w-3.5 mr-2"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
								>
									<path
										clipRule="evenodd"
										fillRule="evenodd"
										d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
									/>
								</svg>
								Add product
							</button>
						</div>
					</div>
					<div className="overflow-x-auto">
						<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
							<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
								<tr>
									<th scope="col" className="px-4 py-3">
										Judul Manga
									</th>
									<th scope="col" className="px-4 py-3">
										Judul Chapter
									</th>
									<th scope="col" className="px-4 py-3">
										Chapter
									</th>
									{/* <th scope="col" className="px-4 py-3">
										Description
									</th>
									<th scope="col" className="px-4 py-3">
										Price
									</th> */}
									<th scope="col" className="px-4 py-3">
										<span className="sr-only">Actions</span>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr className="border-b dark:border-gray-700">
									<th
										scope="row"
										className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
									>
										Apple iMac 27inch
									</th>
									<td className="px-4 py-3">PC</td>
									<td className="px-4 py-3">Apple</td>
									{/* <td className="px-4 py-3">300</td>
									<td className="px-4 py-3">$2999</td> */}
									<td className="px-4 py-3 flex items-center justify-end">
										<button
											id="apple-imac-27-dropdown-button"
											data-dropdown-toggle="apple-imac-27-dropdown"
											className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
											type="button"
										>
											<svg
												className="w-5 h-5"
												aria-hidden="true"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
											</svg>
										</button>
										<div
											id="apple-imac-27-dropdown"
											className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
										>
											<ul
												className="py-1 text-sm text-gray-700 dark:text-gray-200"
												aria-labelledby="apple-imac-27-dropdown-button"
											>
												<li>
													<a
														href="#"
														className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
													>
														Show
													</a>
												</li>
												<li>
													<a
														href="#"
														className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
													>
														Edit
													</a>
												</li>
											</ul>
											<div className="py-1">
												<a
													href="#"
													className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
												>
													Delete
												</a>
											</div>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AdminChapter;
