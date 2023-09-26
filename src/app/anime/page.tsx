import Navbar from "@/components/Layouts/Navbar";
import Image from "next/image";

const Animelist = () => {
	return (
		<>
			<Navbar></Navbar>
			<div className="flex justify-center items-center ">
				<div className="card">
					<div className="w-[15rem] flex flex-col text-center  border-[2px] border-slate-950 overflow-hidden rounded-md ">
						<div className="card-header flex justify-center border-b-2 ">
							<Image
								src={"/img/92092l.jpg"}
								width={250}
								height={50}
								alt="card-image"
								className="object-contain"
							/>
						</div>
						<div className="card-body">
							<h2 className="card-title font-bold">
								Anime title
							</h2>
						</div>
						<div className="card-footer"></div>
					</div>
				</div>
			</div>
		</>
	);
};
