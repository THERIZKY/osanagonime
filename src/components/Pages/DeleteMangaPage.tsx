"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Swal from "sweetalert2";

const DeleteDataMangaPage = ({ id }: { id: string }) => {
	const router = useRouter();
	useEffect(() => {
		deleteHandler(id);
	}, [id, router]);

	return <></>;
};

export default DeleteDataMangaPage;
