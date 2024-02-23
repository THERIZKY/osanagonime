import { getAllManga, getChapterByChapterId } from "@/utils/mysql/get/services";
import { editHandler } from "@/utils/serverAction/action";

const EditChapterPage = async ({ idChapter }: any) => {
	const dataManga = await getAllManga();

	const dataChapter: any = await getChapterByChapterId(Number(idChapter));

	return (
		<div>
			<form action={editHandler} className="placeholder-gray-500::placeholder bg-opacity-0::placeholder flex w-full flex-col gap-5 p-2 pt-8">
				<input type="hidden" name="idChapter" id="idChapter" value={dataChapter.idChapter} />
				<h1 className="pb-5 text-center text-3xl font-bold text-white">Edit Chapter</h1>
				<label className="flex flex-col gap-3 ">
					<div className="badge badge-primary text-white">Judul Chapter</div>
					<input
						type="text"
						name="judulChapter"
						className=" input input-bordered input-info grow bg-transparent text-blue-300 focus:outline-2 focus:outline-sky-500"
						placeholder="Judul Chapter"
						defaultValue={dataChapter.judulChapter}
						required
					/>
				</label>
				<label className="flex flex-col gap-3" htmlFor="chapter">
					<div className="badge badge-primary text-white">Chapter</div>
					<input
						type="number"
						className="input input-bordered input-info grow bg-transparent text-blue-300"
						name="chapter"
						placeholder="1"
						defaultValue={dataChapter.chapter}
						required
					/>
				</label>
				<label htmlFor="" className="flex flex-col gap-3">
					<div className="badge badge-primary text-white">Manga</div>
					<input
						type="text"
						name="mangaId"
						list="manga"
						className="input input-bordered bg-transparent input-info text-blue-300"
						placeholder="Manga"
						defaultValue={dataChapter.mangaId}
						required
					/>
					<datalist id="manga" defaultValue={dataChapter.mangaId}>
						{dataManga &&
							dataManga.map((manga: any, index: number) => (
								<option key={index} value={`${manga.idManga}`}>
									{manga.mangaTitle}
								</option>
							))}
					</datalist>
				</label>
				<label className="flex h-32 flex-col gap-3" htmlFor="chapter">
					<div className="badge badge-primary text-white">Image</div>
					<textarea
						className="input input-bordered input-info h-full grow resize-none bg-transparent p-2 text-blue-300"
						name="image"
						defaultValue={dataChapter.image}
						required
						placeholder="https://image-image.net"
					/>
				</label>
				<button type="submit" className="mt-2 w-full rounded-md bg-sky-500 px-3 py-2 font-semibold text-white">
					Edit Chapter
				</button>
			</form>
		</div>
	);
};

export default EditChapterPage;
