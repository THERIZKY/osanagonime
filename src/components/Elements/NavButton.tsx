import Link from "next/link";

type NavButtonProps = {
	size: string;
	hoverColor: string;
	gapSize: string;
};

const Button = ({ size, hoverColor, gapSize }: NavButtonProps) => {
	return (
		<div className={`button flex items-center gap-${gapSize} text-white`}>
			<Link
				className={`hover:text-${hoverColor} transition-all duration-200 text-[${size}]`}
				href={"/"}
			>
				Home
			</Link>
			<Link
				className={`hover:text-${hoverColor} transition-all duration-200 text-[${size}]`}
				href={"/popular"}
			>
				Popular Anime
			</Link>
			<Link
				className={`hover:text-${hoverColor} transition-all duration-200 text-[${size}]`}
				href={"/anime"}
			>
				All Anime
			</Link>
		</div>
	);
};

export default Button;
