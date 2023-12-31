import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

type NavButtonProps = {
	size: string;
	hoverColor: string;
	gapSize: string;
	status: any;
};

const Button = ({ size, hoverColor, gapSize, status }: NavButtonProps) => {
	return (
		<div className={`button flex items-center ${gapSize} text-white`}>
			<Link
				className={`hover:${hoverColor} transition-all duration-200 text-${size}`}
				href={"/"}
			>
				Home
			</Link>
			<Link
				className={`hover:${hoverColor} transition-all duration-200 text-${size}`}
				href={"/popular"}
			>
				Popular Anime
			</Link>
			<Link
				className={`hover:${hoverColor} transition-all duration-200 text-${size}`}
				href={"/anime"}
			>
				All Anime
			</Link>
			{status === "authenticated" ? (
				<button onClick={() => signOut()}>Log Out</button>
			) : (
				<button onClick={() => signIn()}>Log In</button>
			)}
		</div>
	);
};

export default Button;
