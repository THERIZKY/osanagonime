"use client";
import Sidebar from "@/components/Layouts/Sidebar";
import { motion } from "framer-motion";
import React, { useState } from "react";

const SidebarWrapper = ({ children }: { children: React.ReactNode }) => {
    const [isMaximized, setIsSidebarMaximized] = useState(false);

    return (
        <>
            {/* Sidebar */}
            <Sidebar isMaximized={isMaximized} setIsSidebarMaximized={setIsSidebarMaximized} />

            {/* Main content area with dynamic margin */}
            <motion.div
                initial={{ marginLeft: isMaximized ? "15rem" : "5rem" }}
                animate={{ marginLeft: isMaximized ? "15rem" : "5rem" }}
                transition={{ duration: 0.355 }}
                className="flex-1"
            >
                {children}
            </motion.div>
        </>
    );
};

export default SidebarWrapper;
