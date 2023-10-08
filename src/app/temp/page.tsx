"use client";

import Loading from "@/components/Elements/Loading";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
const Temp = () => {
	const router = useRouter();
	router.push("/admin/manga");
	return (
		<>
			<div className="flex justify-center items-center h-screen gap-10 bg-slate-600">
				<Loading />
			</div>
		</>
	);
};

export default Temp;
