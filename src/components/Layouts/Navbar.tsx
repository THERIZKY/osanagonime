import Image from "next/image";
import Link from "next/link";
import NavButton from "../Elements/NavButton";

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
					<NavButton gapSize="10" size="" hoverColor="slate-900" />
				</div>
			</div>
		</>
	);
};

export default Navbar;
