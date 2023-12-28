import NavbarHome from "@/components/Layouts/NavbarHome";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<div className="bg-gradient-home w-full min-h-screen overflow-hidden">
				<div className="md:pl-20 flex flex-col ">
					<NavbarHome />
					<div className="flex flex-col justify-center items-center md:flex-row  w-full h-[45rem]">
						<div className="w-full md:w-1/2 flex  justify-center items-center">
							<Image
								src={"/img/animek.png"}
								width={650}
								height={650}
								alt="home-image"
							/>
						</div>
						<div className="w-full md:w-1/2flex flex-col justify-center gap-10">
							<div className="flex justify-center md:justify-start">
								<Image
									src={"/img/osanagoTrans.png"}
									width={300}
									height={300}
									alt="logo"
								/>
							</div>
							<form action="" className="flex gap-5">
								<input
									type="text"
									className="w-[600px] h-[60px] rounded-full pl-5"
									placeholder="Search Anime"
								/>
								<button className="w-[60px] h-[60px] rounded-full bg-red-600 text-white flex justify-center items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										height="1.25em"
										viewBox="0 0 512 512"
									>
										<path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
									</svg>
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
