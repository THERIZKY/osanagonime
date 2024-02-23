import { Suspense } from "react";

// Import component
import Loading from "@/components/Elements/Loading/Loading";
import ButtonLink from "@/components/Elements/Button/Link/NavigationLink";
import AddMangaForm from "@/components/Layouts/Admin/addMangaForm";

const AddDataMangaPage = async () => {
	return (
		<div className="flex flex-col items-center">
			<h1 className="text-white text-center text-3xl font-bold py-3">Tambah Data Manga</h1>
			<div className=" w-3/4 flex flex-col items-center gap-10">
				<Suspense fallback={<Loading />}>
					<AddMangaForm />
				</Suspense>
				<ButtonLink href="/admin/manga" className="btn btn-md btn-primary">
					Back To Manga List
				</ButtonLink>
			</div>
		</div>
	);
};

export default AddDataMangaPage;
