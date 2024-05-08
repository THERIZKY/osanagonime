"use client";

import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    DropdownItem,
    DropdownTrigger,
    Dropdown,
    DropdownMenu,
    Avatar,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => (
    <Image
        src={"/img/osanagoTrans.png"}
        width={150}
        height={150}
        alt={"logo"}
    />
);

const Nav = () => {
    return (
        <Navbar isBlurred shouldHideOnScroll>
            <NavbarBrand>
                <Logo />
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-10" justify="center">
                <NavbarItem>
                    <Link href="/">Home</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/manga">Manga</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/manga/genre">Genre Manga</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/anime">Anime</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/anime/genre">Genre Anime</Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent as="div" justify="end">
                <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                        <Avatar
                            isBordered
                            as="button"
                            className="transition-transform"
                            color="secondary"
                            name="Jason Hughes"
                            size="sm"
                            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                        />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Profile Actions" variant="flat">
                        <DropdownItem key="profile" className="h-14 gap-2">
                            <p className="font-semibold">Signed in as</p>
                            <p className="font-semibold">zoey@example.com</p>
                        </DropdownItem>
                        <DropdownItem key="dashboard">Dashboard</DropdownItem>
                        <DropdownItem className="block sm:hidden" key="manga">
                            Manga
                        </DropdownItem>
                        <DropdownItem
                            className="block sm:hidden"
                            key="genre_manga"
                        >
                            Genre Manga
                        </DropdownItem>
                        <DropdownItem className="block sm:hidden" key="anime">
                            Anime
                        </DropdownItem>
                        <DropdownItem
                            className="block sm:hidden"
                            key="genre_anime"
                        >
                            Genre Anime
                        </DropdownItem>
                        <DropdownItem key="help_and_feedback">
                            Help & Feedback
                        </DropdownItem>
                        <DropdownItem key="logout" color="danger">
                            Log Out
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
        </Navbar>
    );
};

export default Nav;
