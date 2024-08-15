import Link from "next/link";

const link = [
    {
        name: "Home",
        href: "/",
        gapSize: "gap-20",
        size: "[35px]",
        hoverColor: "text-orange-700",
    },
    {
        name: "Anime",
        href: "/anime",
        gapSize: "gap-20",
        size: "[35px]",
        hoverColor: "text-orange-700",
    },
    {
        name: "Manga",
        href: "/manga",
        gapSize: "gap-20",
        size: "[35px]",
        hoverColor: "text-orange-700",
    },
];

const NavHomePage = () => {
    return (
        <>
            <div className="navbar  w-full pt-20 flex  justify-center">
                {link.map(
                    ({ gapSize, size, hoverColor, name, href, index }: any) => (
                        <div
                            key={index}
                            className={`flex items-center w-[200px] ${gapSize} text-white`}
                        >
                            <Link
                                className={`hover:${hoverColor} transition-all duration-200 text-${size}`}
                                href={href}
                            >
                                {name}
                            </Link>
                        </div>
                    )
                )}
            </div>
        </>
    );
};

export default NavHomePage;
