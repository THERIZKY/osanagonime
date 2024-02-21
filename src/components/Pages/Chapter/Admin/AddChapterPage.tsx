import { submitHandler } from "@/app/serverAction/action1";

const AddChapterPage = ({ dataManga }: any) => {
	console.log(dataManga);
	return (
		<div>
			<form action={submitHandler} className="flex flex-col gap-2 w-full pt-8 p-2 placeholder-gray-500::placeholder bg-opacity-0::placeholder">
				<h1 className="text-3xl font-bold text-white text-center pb-5">Add Chapter</h1>
				<label className=" flex flex-col gap-1 ">
					Judul Chapter
					<input
						type="text"
						name="judulChapter"
						className=" input input-bordered grow bg-transparent focus:outline-sky-500 focus:outline-2 "
						placeholder="Judul Chapter"
						required
					/>
				</label>
				<label className="flex flex-col gap-1" htmlFor="chapter">
					Chapter
					<input type="number" className="grow input bg-transparent input-bordered" name="chapter" placeholder="1" required />
				</label>
				<label htmlFor="" className=" flex flex-col gap-1">
					Manga
					<input type="text" name="mangaId" list="manga" className="input input-bordered bg-transparent" placeholder="Manga" required />
					<datalist id="manga">
						{dataManga &&
							dataManga.map((manga: any, index: number) => (
								<option key={index} value={`${manga.idManga}`}>
									{manga.mangaTitle}
								</option>
							))}
						{/* {Array.from({ length: 5 }).map((_, index) => (
						))} */}
					</datalist>
				</label>
				<label className="flex flex-col gap-1 h-32" htmlFor="chapter">
					Image
					<textarea className="grow input bg-transparent h-full p-2 input-bordered resize-none" name="image" required placeholder="https://image-image.net" />
				</label>
				<button type="submit" className="bg-sky-500 px-3 py-2 rounded-md w-full text-white font-semibold mt-2">
					Add Chapter
				</button>
			</form>
		</div>
	);
};
export default AddChapterPage;
