"use client";

import Container from "@/components/Elements/Container";
import Image from "next/image";

interface MangaData {
	id: string;
	deskripsi: string;
	idManga: number;
	mangaTitle: string;
	cover: string;
	slug: string;
	type: string;
}

const AdminMangaPage = ({ dataManga }: any) => {
	return (
		<Container className="pt-11 px-6">
			<div className="overflow-x-auto">
				<table className="table">
					{/* head */}
					<thead>
						<tr>
							<th>
								<label>
									<input type="checkbox" className="checkbox" />
								</label>
							</th>
							<th>Judul Manga</th>
							<th>Deskripsi</th>
							<th>Favorite Color</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}
						<tr>
							<th>
								<label>
									<input type="checkbox" className="checkbox" />
								</label>
							</th>
							<td>
								<div className="flex items-center gap-3">
									<div className="avatar">
										<div className="mask mask-squircle w-12 h-12">
											<Image width={200} height={200} priority src="/tailwind-css-component-profile-2@56w.png" alt="Manga Cover" />
										</div>
									</div>
									<div>
										<div className="font-bold">Hart Hagerty</div>
										<div className="text-sm opacity-50">United States</div>
									</div>
								</div>
							</td>
							<td>
								Zemlak, Daniel and Leannon
								<br />
								<span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
							</td>
							<td>Purple</td>
							<th>
								<button className="btn btn-ghost btn-xs">details</button>
							</th>
						</tr>
					</tbody>
				</table>
			</div>
		</Container>
	);
};

export default AdminMangaPage;
