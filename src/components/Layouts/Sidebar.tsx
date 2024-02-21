"use client";

import { signIn, signOut } from "next-auth/react";
import SidebarContainer from "@/components/Templates/Admin/Sidebar/SidebarContainer";
import SidebarHeader from "@/components/Elements/Admin/Sidebar/SidebarHeader";
import SidebarBody from "@/components/Elements/Admin/Sidebar/SidebarBody";
import ButtonLink from "@/components/Elements/Button/Link/NavigationLink";
import Link from "next/link";
import Heading from "../Elements/Text/Heading";
import Button from "../Elements/Button/Buttons/Button";

const Sidebar = ({ status }: any) => {
	const renderButtonNavigation = (href: string, title: string, level: number) => (
		<ButtonLink href={href}>
			<Heading level={level}>{title}</Heading>
		</ButtonLink>
	);

	return (
		<SidebarContainer>
			<SidebarHeader className="h-20 bg-slate-700 flex pl-5 items-center uppercase">
				<SidebarHeader.Text className="text-white">Projects</SidebarHeader.Text>
			</SidebarHeader>
			<SidebarBody className="flex flex-col h-[90%] justify-between">
				<SidebarBody.ButtonContainer className="flex flex-col gap-4 items-center pt-8 text-white">
					{/* Button Manga */}
					{renderButtonNavigation("/admin/manga", "Manga", 3)}
					{renderButtonNavigation("/admin/chapter", "Chapter", 3)}
					{renderButtonNavigation("#", "Anime (CommingSoon)", 3)}
					{renderButtonNavigation("#", "Episode (CommingSoon)", 3)}
					{renderButtonNavigation("#", "Movie (CommingSoon)", 3)}
				</SidebarBody.ButtonContainer>
				<SidebarBody.ButtonContainer className="flex flex-col items-center text-white">
					{status === "authenticated" ? (
						<Button onClick={() => signIn()} className="btn btn-ghost btn-outline btn-md  w-[96%] transition-all duration-75 group">
							<Heading level={3} className="group-hover:scale-110 transition-all duration-300">
								Sign In
							</Heading>
						</Button>
					) : (
						<Button onClick={() => signOut()} className="btn btn-ghost btn-outline btn-md  w-[96%] transition-all duration-75 group">
							<Heading level={3} className="group-hover:scale-110 transition-all duration-300">
								Sign Out
							</Heading>
						</Button>
					)}
				</SidebarBody.ButtonContainer>
			</SidebarBody>
		</SidebarContainer>
	);
};

export default Sidebar;
