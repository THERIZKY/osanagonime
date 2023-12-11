"use client";
import { Fragment, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Sidebar from "@/components/Layouts/Sidebar";

export default function AdminLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Fragment>
      <Sidebar />
      <div className="w-full min-h-screen pl-[21rem] bg-slate-600">
        {children}
      </div>
    </Fragment>
  );
}
