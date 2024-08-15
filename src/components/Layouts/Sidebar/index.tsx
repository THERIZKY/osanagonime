"use client";

// Components and UI
import { Card, Button } from "@nextui-org/react";
import { motion } from "framer-motion";
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

interface SidebarProps {
    isMaximized: boolean;
    setIsSidebarMaximized: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ isMaximized, setIsSidebarMaximized }) => {
    return (
        <motion.div
            initial={{ width: isMaximized ? "5rem" : "15rem" }}
            animate={{ width: isMaximized ? "15rem" : "5rem" }}
            transition={{ duration: 0.355 }}
            className="fixed h-screen"
        >
            <Card radius="none" className="flex flex-col justify-between bg-slate-800 h-full p-3">
                <div className="flex flex-col gap-5">
                    <h1 className="text-center">Sidebar</h1>
                    {/* Dropdown Manga */}
                    <DropdownMenu
                        isMaximized={isMaximized}
                        titleMenu="Manga"
                        minimizedIcons={<HiBookOpen size={20} />}
                    >
                        <li className="p-2">
                            <Link className="flex w-full h-full " href="/manga">
                                List Manga
                            </Link>
                        </li>
                        <li>List Chapter</li>
                        <li>List Volume</li>
                    </DropdownMenu>

                    {/* Dropdown Anime */}
                    <DropdownMenu
                        isMaximized={isMaximized}
                        titleMenu="Anime"
                        minimizedIcons={<HiTv size={20} />}
                    >
                        <li>List Anime</li>
                        <li>List Episode</li>
                        <li>List Season</li>
                    </DropdownMenu>

                    {/* Dropdown Users */}
                    <DropdownMenu
                        isMaximized={isMaximized}
                        titleMenu="Users"
                        minimizedIcons={<HiUser size={20} />}
                    >
                        <li>List Users</li>
                        <li>Users Photo</li>
                    </DropdownMenu>
                    <Button variant="light" onClick={() => setIsSidebarMaximized(!isMaximized)}>
                        {isMaximized ? (
                            <HiChevronDoubleLeft size={50} />
                        ) : (
                            <HiChevronDoubleRight size={50} />
                        )}
                    </Button>
                </div>
                <div className="flex flex-col">
                    <Button variant="light" onClick={() => setIsSidebarMaximized(!isMaximized)}>
                        <HiUserCircle size={50} />
                    </Button>
                </div>
            </Card>
        </motion.div>
    );
};

export default Sidebar;
