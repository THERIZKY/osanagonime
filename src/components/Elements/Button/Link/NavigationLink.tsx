"use client";
import Link from "next/link";

const ButtonLink = ({
	href,
	className,
	children,
}: {
	href: string;
	className?: string; //Opsional classname (kalo mau diisi bisa kalo mau default juga bisa)
	children: React.ReactNode;
}) => {
	return (
		<Link href={href} className={className || "btn btn-ghost btn-outline btn-md  w-[96%] transition-all duration-75 group"}>
			{children}
		</Link>
	);
};

export default ButtonLink;
