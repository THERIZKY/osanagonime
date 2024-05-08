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

const NavigationBottom = ({ maxChapter }: { maxChapter: number }) => {
    const path = usePathname();
    const { push } = useRouter();

    const splitedPath = path.split("/").filter(Boolean);

    const getLinkNext = `/manga/${splitedPath[1]}/${Number(splitedPath[2]) + 1}`;
    const getLinkPrev = `/manga/${splitedPath[1]}/${Number(splitedPath[2]) - 1}`;

    return (
        <div className="btm-nav bg-gray-800 ">
            {/* Previous */}
            <NavLink name="Previous Chapter" to={getLinkPrev}>
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
            <NavLink name="Daftar Isi" to={""}>
                <HiListBullet size={60} />
            </NavLink>

            {/* Next Chapter */}
            <NavLink to={getLinkNext} name="Next Chapter">
                <HiChevronDoubleRight size={60} />
            </NavLink>
        </div>
    );
};

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

export default NavigationBottom;
