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
                    {/* Dropdown Manga */}
                    <DropdownMenu
                        isMaximized={isMaximized}
                        titleMenu="Manga"
                        minimizedIcons={<HiBookOpen size={20} />}
                    >
                        <motion.li
                            whileHover={{
                                scale: 0.898,
                                backgroundColor: "rgba(158, 158, 158, 0.3)",
                                borderRadius: "1rem",
                            }}
                            className="p-2"
                        >
                            <Link className="flex w-full h-full " href="/manga">
                                List Manga
                            </Link>
                        </motion.li>
                        <motion.li
                            whileHover={{
                                scale: 0.898,
                                backgroundColor: "rgba(158, 158, 158, 0.3)",
                                borderRadius: "1rem",
                            }}
                            className="p-2"
                        >
                            <Link className="flex w-full h-full " href="/manga">
                                List Chapter
                            </Link>
                        </motion.li>
                        <motion.li
                            whileHover={{
                                scale: 0.898,
                                backgroundColor: "rgba(158, 158, 158, 0.3)",
                                borderRadius: "1rem",
                            }}
                            className="p-2"
                        >
                            <Link className="flex w-full h-full " href="/manga">
                                List Genre
                            </Link>
                        </motion.li>
                    </DropdownMenu>

                    {/* Dropdown Anime */}
                    <DropdownMenu
                        isMaximized={isMaximized}
                        titleMenu="Anime"
                        minimizedIcons={<HiTv size={20} />}
                    >
                        <motion.li
                            whileHover={{
                                scale: 0.898,
                                backgroundColor: "rgba(158, 158, 158, 0.3)",
                                borderRadius: "1rem",
                            }}
                            className="p-2"
                        >
                            <Link className="flex w-full h-full " href="/manga">
                                List Anime
                            </Link>
                        </motion.li>
                        <motion.li
                            whileHover={{
                                scale: 0.898,
                                backgroundColor: "rgba(158, 158, 158, 0.3)",
                                borderRadius: "1rem",
                            }}
                            className="p-2"
                        >
                            <Link className="flex w-full h-full " href="/manga">
                                List Episode
                            </Link>
                        </motion.li>
                        <motion.li
                            whileHover={{
                                scale: 0.898,
                                backgroundColor: "rgba(158, 158, 158, 0.3)",
                                borderRadius: "1rem",
                            }}
                            className="p-2"
                        >
                            <Link className="flex w-full h-full " href="/manga">
                                List Season
                            </Link>
                        </motion.li>
                    </DropdownMenu>

                    {/* Dropdown Users */}
                    <DropdownMenu
                        isMaximized={isMaximized}
                        titleMenu="Users"
                        minimizedIcons={<HiUser size={20} />}
                    >
                        <motion.li
                            whileHover={{
                                scale: 0.898,
                                backgroundColor: "rgba(158, 158, 158, 0.3)",
                                borderRadius: "1rem",
                            }}
                            className="p-2"
                        >
                            <Link className="flex w-full h-full " href="/manga">
                                List Users
                            </Link>
                        </motion.li>
                        <motion.li
                            whileHover={{
                                scale: 0.898,
                                backgroundColor: "rgba(158, 158, 158, 0.3)",
                                borderRadius: "1rem",
                            }}
                            className="p-2"
                        >
                            <Link className="flex w-full h-full " href="/manga">
                                Users Settings
                            </Link>
                        </motion.li>
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
                                    <li>
                                        <Link href={""}>
                                            <motion.li
                                                whileHover={{
                                                    scale: 0.898,
                                                    backgroundColor: "rgba(158, 158, 158, 0.3)",
                                                    borderRadius: "1rem",
                                                }}
                                                className="p-2"
                                            >
                                                <Link className="flex w-full h-full " href="">
                                                    Log Out
                                                </Link>
                                            </motion.li>
                                        </Link>
                                    </li>
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
