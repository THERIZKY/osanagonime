const axios = require("axios");
const slugify = require("slugify");

interface MangaData {
	id: string;
	type: string;
}

export async function getDataManga(title: string) {
	try {
		const response = await axios({
			method: "GET",
			url: "https://api.mangadex.org/manga",
			params: {
				title: title,
				order: {
					relevance: "desc",
				},
			},
		});
		return response.data.data;
	} catch (err) {
		console.error("error : ", err);
	}
}
export async function getMangaCover(title: string) {
	try {
		const selectedManga = await getDataManga(title);
		let coverID = "";

		// Ambil Manga Id
		const mangaId = selectedManga[0].id;

		// Ngambil Cover Art
		selectedManga[0].relationships.map((item: MangaData) => {
			if (item.type === "cover_art") {
				coverID = item.id;
			}
		});

		// Ngambil Data Covers Dari API
		const responses = await axios({
			methdod: "GET",
			url: `https://api.mangadex.org/cover/${coverID}`,
		});
		const coverName = responses.data.data.attributes.fileName;

		const coverLink = `https://uploads.mangadex.org/covers/${mangaId}/${coverName}`;

		return coverLink;
	} catch (err) {
		console.error("error : ", err);
	}
}

export async function getMangaDescription(title: string) {
	try {
		const selectedManga = await getDataManga(title);

		const description = selectedManga[0].attributes.description.en;

		return description;
	} catch (err) {
		console.error(err);
	}
}

export async function getMangaGenres(title: string) {
	try {
		const selectedManga = await getDataManga(title);

		const tags = selectedManga[0].attributes.tags;
		const genre = tags.map((item: any) => {
			return item.attributes.name.en;
		});

		return genre;
	} catch (err) {
		console.error(err);
	}
}

export async function getMangaDetails(title: string) {
	try {
		const selectedManga = await getDataManga(title);

		const mangaTitle = selectedManga[0].attributes.title.en;
		const mangaCover = await getMangaCover(title);
		const mangaDescription = (await getMangaDescription(title)) || "Manga Tidak Memiliki Deskripsi";
		const mangaGenre = (await getMangaGenres(title)) || "Manga Tidak Memiliki Genre";
		const mangaSlug = slugify(mangaTitle, { lower: true });

		return {
			mangaTitle,
			mangaCover,
			mangaDescription,
			mangaSlug,
			mangaGenre,
		};
	} catch (err) {
		console.error(err);
	}
}
