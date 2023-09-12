import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
	return (
		<>
			<div className="flex w-screen bg-slate-600">
				<div className="flex gap-32">
					<div className="logo">
						<Image
							src={"/img/osanagoTransparant.png"}
							width={100}
							height={50}
							alt="logo-navbar"
							className="object-cover"
						/>
					</div>
					<div className="button flex items-center gap-10 text-white">
						<Link href={"/"}>Home</Link>
						<Link href={"/popular"}>Popular Anime</Link>
						<Link href={"/anime"}>All Anime</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
