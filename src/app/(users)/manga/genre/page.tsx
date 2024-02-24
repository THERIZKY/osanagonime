"use client";

import { useRouter } from "next/navigation";
import Container from "@/components/Elements/Container";

const GenrePage = () => {
	const { back } = useRouter();

	return (
		<Container>
			<div className="flex flex-col justify-center items-center h-screen">
				<h1 className="text-9xl text-slate-600 drop-shadow-[0_15px_25px_rgba(0,255,0,0.30)] font-bold uppercase">Under Progress</h1>
				<h3 className="text-3xl pt-14">Mohon Bersabar Fitur Sedang Dalam Pengerjaan</h3>
				<p className="pt-8">Terima Kasih Atas Pengertiannya</p>
				<button className="btn btn-ghost btn-wide" onClick={() => back()}>
					Kembali
				</button>
			</div>
		</Container>
	);
};

export default GenrePage;
