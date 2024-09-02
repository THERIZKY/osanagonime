"use client";

// Components and UI
import { Card, Button } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import DropdownMenu from "./DropdownMenu";
import {
    HiBookOpen,
    HiTv,
    HiUser,
    HiChevronDoubleRight,
    HiChevronDoubleLeft,
    HiUserCircle,
} from "react-icons/hi2";

// Next JS
import Link from "next/link";
import { useState } from "react";
import { signOut } from "next-auth/react";

const menuItems = [
    {
        title: "Manga",
        icon: <HiBookOpen size={20} />,
        links: [
            { href: "/admin/manga", label: "List Manga" },
            { href: "/admin/chapter", label: "List Chapter" },
            { href: "/admin/manga/genre", label: "List Genre" },
        ],
    },
    {
        title: "Anime",
        icon: <HiTv size={20} />,
        links: [
            { href: "/admin/anime", label: "List Anime" },
            { href: "/admin/episode", label: "List Episode" },
            { href: "/admin/anime/genre", label: "List Genre" },
        ],
    },
    {
        title: "Users",
        icon: <HiUser size={20} />,
        links: [
            { href: "/admin/users", label: "List Users" },
            { href: "/admin/users/settings", label: "Users Settings" },
        ],
    },
];

interface SidebarProps {
    isMaximized: boolean;
    setIsSidebarMaximized: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ isMaximized, setIsSidebarMaximized }) => {
    const [profileOpen, setProfileOpen] = useState(false);

    return (
        <motion.div
            initial={{ width: isMaximized ? "5rem" : "15rem" }}
            animate={{ width: isMaximized ? "15rem" : "5rem" }}
            transition={{ duration: 0.355 }}
            className="fixed h-screen"
        >
            <Card radius="none" className="flex flex-col justify-between bg-slate-800 h-full p-3">
                <div className="flex flex-col gap-4">
                    <h1 className="text-center">Sidebar</h1>

                    {menuItems.map((menu, index) => (
                        <DropdownMenu
                            key={index}
                            isMaximized={isMaximized}
                            titleMenu={menu.title}
                            minimizedIcons={menu.icon}
                        >
                            {menu.links.map((link, index) => (
                                <motion.li
                                    key={index}
                                    whileHover={{
                                        scale: 0.898,
                                        backgroundColor: "rgba(158, 158, 158, 0.3)",
                                        borderRadius: "1rem",
                                    }}
                                    className="p-5 border border-t-0 border-b-gray-700 border-x-0"
                                >
                                    <Link className="flex w-full h-full" href={link.href}>
                                        {link.label}
                                    </Link>
                                </motion.li>
                            ))}
                        </DropdownMenu>
                    ))}

                    <Button variant="light" onClick={() => setIsSidebarMaximized(!isMaximized)}>
                        {isMaximized ? (
                            <HiChevronDoubleLeft size={50} />
                        ) : (
                            <HiChevronDoubleRight size={50} />
                        )}
                    </Button>
                </div>

                <div className="flex flex-col">
                    <AnimatePresence initial={false}>
                        {isMaximized && profileOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.255 }}
                                className="overflow-hidden"
                            >
                                <ul className="flex flex-col py-5 px-2 rounded-lg mb-2 bg-gray-600/50">
                                    <motion.li
                                        whileHover={{
                                            scale: 0.898,
                                            backgroundColor: "rgba(158, 158, 158, 0.3)",
                                            borderRadius: "1rem",
                                        }}
                                        className="p-2"
                                    >
                                        <Link
                                            className="flex w-full h-full"
                                            href={""}
                                            onClick={() => signOut({ callbackUrl: "/login" })}
                                        >
                                            Log Out
                                        </Link>
                                    </motion.li>
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <Button variant="light" onClick={() => setProfileOpen(!profileOpen)}>
                        <HiUserCircle size={50} />
                    </Button>
                </div>
            </Card>
        </motion.div>
    );
};

export default Sidebar;
