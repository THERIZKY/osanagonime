const axios = require("axios");

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
					title: "asc",
					relevance: "desc",
				},
			},
		});
		console.log(response);
		return response.data.data;
	} catch (err) {
		console.log("error : ", err);
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
		console.log("error : ", err);
	}
}
