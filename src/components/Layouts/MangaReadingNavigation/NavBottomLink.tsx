"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
    HiChevronDoubleLeft,
    HiChevronDoubleRight,
    HiHome,
    HiBookOpen,
    HiListBullet,
} from "react-icons/hi2";

const NavBottomLink = ({
    next,
    prev,
}: {
    next: () => void;
    prev: () => void;
}) => {
    const pathname = usePathname();

    const links = pathname.split("/").filter(Boolean);

    return (
        <div className="btm-nav bg-gray-800 ">
            {/* Previous */}
            <NavLink name="Previous Chapter" to={""}>
                <HiChevronDoubleLeft size={60} />
            </NavLink>

            {/* Update Chapter (Nanti Dibuat Modal Aja) */}
            <NavLink name="Update" to={""}>
                <HiBookOpen size={60} />
            </NavLink>

            {/* Home */}
            <NavLink name="Home" to={""}>
                <HiHome size={60} />
            </NavLink>

            {/* Chapter List */}
            <NavLink
                name="Daftar Isi"
                to={""}
                onClickTrigger={() => alert("hello world")}
            >
                <HiListBullet size={60} />
            </NavLink>

            {/* Next Chapter */}
            <NavLink to={""} name="Next Chapter" onClickTrigger={next}>
                <HiChevronDoubleRight size={60} />
            </NavLink>
        </div>
    );
};

// Buat Masing2 Link Biar gak banyak Tailwind nya
const NavLink = ({
    name,
    to,
    children,
    onClickTrigger,
}: {
    name: string;
    to: string;
    children?: React.ReactNode;
    onClickTrigger?: () => void;
}) => {
    return (
        <Link
            href={to}
            onClick={onClickTrigger}
            className="text-slate-300 w-12 h-12 md:w-14 md:h-14"
        >
            {children}
            <p className="text-xs md:text-md">{name}</p>
        </Link>
    );
};

export default NavBottomLink;
