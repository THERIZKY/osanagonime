import Navbar from "@/components/Layouts/Navbar";
import Image from "next/image";

const Dashboard = () => {
	return (
		<div className="bg-base-100 min-h-screen">
			<Navbar />

			<header className="bg-slate-800 shadow">
				<div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
					<h1 className="text-3xl font-bold tracking-tight text-gray-300">Dashboard</h1>
				</div>
			</header>
			<main>
				<div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
					<div className="container mx-auto mt-8">
						<div className="bg-slate-800 rounded-lg shadow-md p-4 mb-4">Your Manga Bookmark</div>
					</div>

					{/* Bookmark Manga  */}
					<div className="max-w-sm w-44 group rounded">
						<div className="max-w-sm w-44 group rounded overflow-hidden shadow-lg relative">
							<Image className="w-full" src="/img/92092l.jpg" width={200} height={200} alt="Gambar Kartu" />
							<div className="absolute top-0 left-0 right-0 h-full bg-slate-800/20"></div>
							<div className="absolute flex flex-col justify-center items-center h-full bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0 ">
								<div className="font-bold text-xl mb-2">Judul Kartu</div>
							</div>
						</div>
						<h1 className="text-center group-hover:opacity-0 font-bold mb-2 transition-all">Judul Kartu</h1>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Dashboard;
