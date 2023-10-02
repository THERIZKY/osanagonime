"use client";
import { getAllData } from "@/utils/firebase/read/services";
import { Timestamp } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface dataManga {
	id: string;
	deskripsi: string;
	idManga: number;
	mangaTitle: string;
	rilis: Timestamp;
	cover: string;
	slug: string;
	type: string;
}
const AdminManga = () => {
	const [data, setData] = useState<any>([]);

	useEffect(() => {
		const getDataManga = async () => {
			const data = await getAllData();
			setData(data);
		};

		getDataManga();
	}, []);
	console.log(data);
	return (
		<>
			<div className="w-screen min-h-screen bg-slate-600">
				<div className="flex flex-col items-center">
					<h1 className="text-center text-3xl font-bold">
						Halaman Admin
					</h1>

					<table className="border-y-2 w-3/4 text-center text-white">
						<thead>
							<tr>
								<th>No</th>
								<th>Cover</th>
								<th>Judul</th>
								<th>Deskripsi</th>
								<th>Rilis</th>
								<th>Aksi</th>
							</tr>
						</thead>
						<tbody>
							{data.map((item: dataManga, index: number) => (
								<tr key={item.id} className="border-y-2">
									<td>{index + 1}</td>
									<td className=" flex justify-center p-5">
										<Image
											width={250}
											height={250}
											src={item.cover}
											alt="cover-manga"
										/>
									</td>
									<td>{item.mangaTitle}</td>
									<td>{item.deskripsi}</td>
									<td>2005</td>
									<td>
										<button className="bg-red-600 text-white px-3 py-2 rounded-md">
											Delete
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
					<Link
						href={"/admin/manga/add"}
						className="bg-blue-600 text-white mt-5 px-5 py-2 rounded-md"
					>
						Tambah Manga
					</Link>
				</div>
			</div>
		</>
	);
};

export default AdminManga;
