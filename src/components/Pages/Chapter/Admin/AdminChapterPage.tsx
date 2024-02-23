"use client";

import { chapterConfirmHandler } from "@/utils/function/function";
import { useState } from "react";
import { useRouter } from "next/navigation";

import SearchChapterForm from "@/components/Layouts/Admin/searchChapterForm";

const AdminChapterPage = ({ dataChapter }: any) => {
	const [isLoading, setIsLoading] = useState(false);
	const { push } = useRouter();

	return (
		<>
			<SearchChapterForm />
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
						{dataChapter &&
							dataChapter.map((data: any, index: number) => {
								return (
									<tr key={index} className="border-b dark:border-gray-700">
										<th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
											{data?.judulChapter}
										</th>
										<td className="px-4 py-3">{data.chapter}</td>
										<td className="px-4 py-3">{data.mangaRef.mangaTitle}</td>

										<td className="px-4 py-3 flex items-center justify-start">
											<div className=" flex gap-6">
												<button
													className="btn btn-sm h-9 w-[5rem] btn-warning hover:scale-110"
													disabled={isLoading}
													onClick={() => {
														setIsLoading(true);
														push(`/admin/chapter/edit/${data?.idChapter}`);
													}}
												>
													Edit
												</button>

												<button
													className="btn btn-sm h-9 w-[5rem] btn-error hover:scale-110"
													disabled={isLoading}
													onClick={() => {
														setIsLoading(true);
														chapterConfirmHandler(Number(data?.idChapter), (loading: boolean) => setIsLoading(loading));
													}}
												>
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
		</>
	);
};

export default AdminChapterPage;
