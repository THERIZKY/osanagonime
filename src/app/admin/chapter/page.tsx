"use client";
import Loading from "@/components/Elements/Loading";
import { useEffect, useState } from "react";

const AdminChapter = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getChapter = () => {
			setIsLoading(false);
		};
		setTimeout(() => {
			getChapter();
		}, 1000);
	}, []);

	if (isLoading) {
		return (
			<div className="flex justify-center items-center h-screen gap-10 bg-slate-600">
				<Loading />
			</div>
		);
	}
	return (
		<>
			<h1 className="text-center text-4xl text-white uppercase font-bold">
				List Chapter
			</h1>
			<div className="w-full flex justify-center pt-8">
				<table className="border-y-2 w-11/12 text-center text-white">
					<thead>
						<tr className="border-b-2">
							<th>No</th>
							<th>Manga</th>
							<th>Judul Chapter</th>
							<th>Chapter</th>
							<th>Aksi</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>School Idol Days</td>
							<td>Chapter 1</td>
							<td>1</td>
							<td>
								<button className="px-5 py-2 rounded-lg bg-orange-600">
									Edit
								</button>
								<button className="px-5 py-2 rounded-lg bg-red-600">
									Delete
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
};

export default AdminChapter;
