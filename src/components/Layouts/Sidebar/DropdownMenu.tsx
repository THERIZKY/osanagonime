import { Button } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const DropdownMenu = ({
    children,
    isMaximized,
    titleMenu = "Menu",
    minimizedIcons,
}: {
    children: React.ReactNode;
    minimizedIcons?: React.ReactNode;
    isMaximized: boolean;
    titleMenu?: string;
}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full flex flex-col">
            <Button variant="light" radius="md" className="" onClick={() => setIsOpen(!isOpen)}>
                {isMaximized ? (
                    <>
                        {minimizedIcons}
                        {titleMenu}
                    </>
                ) : (
                    minimizedIcons
                )}
            </Button>
            <AnimatePresence initial={false}>
                {isMaximized && isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.355 }}
                        className="overflow-hidden"
                    >
                        <ul className="flex flex-col gap-5">{children}</ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default DropdownMenu;
