"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import {
    HiChevronDoubleLeft,
    HiChevronDoubleRight,
    HiHome,
    HiBookOpen,
    HiListBullet,
} from "react-icons/hi2";
import { useMemo } from "react";

interface NavigationBottomProps {
    maxChapter: number;
}

const NavigationBottom: React.FC<NavigationBottomProps> = ({ maxChapter }) => {
    const path = usePathname();
    const { push } = useRouter();

    const splitedPath = path.split("/").filter(Boolean);

    const currentChapter = useMemo(() => Number(splitedPath[2]), [splitedPath]);
    const getLinkNext = useMemo(
        () => `/manga/${splitedPath[1]}/${currentChapter + 1}`,
        [splitedPath, currentChapter]
    );
    const getLinkPrev = useMemo(
        () => `/manga/${splitedPath[1]}/${currentChapter - 1}`,
        [splitedPath, currentChapter]
    );

    return (
        <div className="btm-nav bg-gray-800 ">
            {/* Previous */}
            <NavLink name="Previous Chapter" to={getLinkPrev} disabled={currentChapter <= 1}>
                <HiChevronDoubleLeft size={60} />
            </NavLink>

            {/* Update Chapter */}
            <NavLink name="Update" to="">
                <HiBookOpen size={60} />
            </NavLink>

            {/* Home */}
            <NavLink name="Home" to="/">
                <HiHome size={60} />
            </NavLink>

            {/* Chapter List */}
            <NavLink name="Daftar Isi" to="">
                <HiListBullet size={60} />
            </NavLink>

            {/* Next Chapter */}
            <NavLink name="Next Chapter" to={getLinkNext} disabled={currentChapter >= maxChapter}>
                <HiChevronDoubleRight size={60} />
            </NavLink>
        </div>
    );
};

interface NavLinkProps {
    name: string;
    to: string;
    children?: React.ReactNode;
    onClickTrigger?: () => void;
    disabled?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({
    name,
    to,
    children,
    onClickTrigger,
    disabled = false,
}) => {
    return (
        <Link
            href={disabled ? "#" : to}
            onClick={disabled ? undefined : onClickTrigger}
            className={`text-slate-300 w-12 h-12 md:w-14 md:h-14 ${
                disabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
        >
            {children}
            <p className="text-xs md:text-md">{name}</p>
        </Link>
    );
};

export default NavigationBottom;
