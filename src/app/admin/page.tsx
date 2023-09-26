import { getAllData } from "@/utils/firebase/services";
import Image from "next/image";
import { useEffect } from "react";
const Admin = () => {
	useEffect(() => {
		const getAllManga = async () => {
			const data = await getAllData();

			return data;
		};

		getAllManga();
	}, []);
	return (
		<>
			<div className="w-screen h-screen bg-slate-600">
				<div className="flex flex-col items-center">
					<h1 className="text-center text-3xl font-bold">
						Halaman Admin
					</h1>

					<table className="border-y-2 w-3/4 text-center">
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
							<tr>
								<td>1</td>
								<td className=" flex justify-center">
									<Image
										width={100}
										height={100}
										src="https://i.postimg.cc/fbzWr1G8/001.jpg"
										alt="cover-manga"
									/>
								</td>
								<td>
									Love Live! Sunshine!! - School Idol Days
								</td>
								<td>
									Love Live! Sunshine!! - School Idol Days
									Deskripsi
								</td>
								<td>2002</td>
								<td>
									<button className="bg-red-600 text-white px-2 py-1 rounded-md">
										Delete
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default Admin;
