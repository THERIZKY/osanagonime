"use client";
import { Suspense, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { confirmHandler } from "@/utils/function/function";
import Button from "@/components/Elements/Button/Buttons/Button";
import Loading from "@/components/Elements/Loading/Loading";

const AdminMangaPage = ({ dataManga }: any) => {
	const [isLoading, setIsLoading] = useState(false);
	const { push } = useRouter();

	return (
		<table className="table overflow-y-auto ">
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
					<th>Genre</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{dataManga &&
					dataManga.map((manga: any, index: number) => (
						<tr key={index}>
							<th>
								<label>
									<input type="checkbox" className="checkbox" />
								</label>
							</th>
							<td>
								<div className="flex items-center gap-3 justify-start">
									<div className="w-20 h-40 ">
										<Image width={200} height={200} priority src={manga.cover} alt="Manga Cover" />
									</div>
									<div>
										<div className="font-bold w-[8rem]">{manga.mangaTitle}</div>
									</div>
								</div>
							</td>
							<td className="w-2/4">{manga.deskripsi}</td>
							<td className="1/4">{manga.genreRef.genre}</td>
							<th>
								<div className="flex flex-col gap-5">
									<Button
										className="btn btn-error btn-md"
										disabled={isLoading}
										onClick={() => {
											<Suspense fallback={<Loading />} />;
											confirmHandler(manga.idManga, (loading: boolean) => setIsLoading(loading));
										}}
									>
										hapus
									</Button>
									<Button
										onClick={() => {
											setIsLoading(true);
											push("/admin/manga/edit/" + manga.idManga);
										}}
										disabled={isLoading}
										className="btn btn-warning btn-md"
									>
										Edit
									</Button>
								</div>
							</th>
						</tr>
					))}
			</tbody>
		</table>
	);
};

export default AdminMangaPage;
