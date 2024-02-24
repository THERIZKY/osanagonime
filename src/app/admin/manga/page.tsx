import { Suspense } from "react";
import Loading from "@/components/Elements/Loading/Loading";
import AdminMangaPage from "@/components/Pages/Manga/Admin/AdminMangaPage";
import Container from "@/components/Elements/Container";
import ButtonLink from "@/components/Elements/Button/Link/NavigationLink";

const AdminManga = async () => {
	const getDataManga = async () => {
		try {
			const res = await fetch(`http://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/manga`, {
				method: "GET",
				headers: { "Content-Type": "application/json" },
				next: { revalidate: 1 },
			});

			if (!res.ok) {
				throw new Error("Failed to fetch manga data");
			}

			return res.json();
		} catch (error) {
			console.error(error);
		}
	};

	const dataManga = await getDataManga();

	return (
		<Suspense fallback={<Loading />}>
			<Container className="pt-11 px-6 text-center">
				<div className="overflow-x-auto max-h-[70vh] text-center">
					<AdminMangaPage dataManga={dataManga} />
				</div>
				<ButtonLink href="/admin/manga/add" className="btn btn-wide btn-primary mt-10">
					Add Manga
				</ButtonLink>
			</Container>
		</Suspense>
	);
};

export default AdminManga;
