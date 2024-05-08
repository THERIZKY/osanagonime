import Image from "next/image";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";

interface dataMangaProps {
    id: string;
    cover: string;
    deskripsi: string;
    mangaTitle: string;
    genre: string[];
    published_at: string | Date;
    slug: string;
}

const MangaDetailPage = async ({
    dataManga,
}: {
    dataManga?: dataMangaProps;
}) => {
    return (
        <>
            <div className="pb-4">
                {dataManga && (
                    <div className="max-h-full bg-slate-900">
                        <div
                            className={`hero min-h-[100%] overflow-hidden bg-base-200/75`}
                        >
                            <div className="hero-content flex-col lg:flex-row">
                                <Image
                                    width={200}
                                    height={200}
                                    src={dataManga.cover}
                                    className="max-w-sm rounded-lg shadow-2xl"
                                    alt=""
                                />
                                <div>
                                    <h1 className="text-5xl font-bold">
                                        {dataManga.mangaTitle}
                                    </h1>
                                    <p className="py-6">
                                        {dataManga.deskripsi}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <Card
                            className="h-[50vh] bg-[#1D232A]"
                            shadow="none"
                            radius="none"
                        >
                            <CardBody className="p-3 text-small text-default-400">
                                <div className="flex flex-col gap-5 text-center">
                                    <div className="w-full bg-gray-500 h-[2.5rem] rounded-xl grid place-items-center">
                                        <h1 className="text-white">
                                            Episode 1
                                        </h1>
                                    </div>
                                    <div className="w-full bg-gray-500 h-[2.5rem] rounded-xl grid place-items-center">
                                        <h1 className="text-white">
                                            Episode 1
                                        </h1>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>

                        {/* <div className="max-h-[56vh] overflow-y-auto bg-base-100"> */}
                        {/* <ul className="menu menu-lg w-full flex gap-4">
                                {!dataManga.chapters.length && (
                                    <h1 className="text-5xl text-center">
                                        Masih Belum ada Chapternya bos, sabar
                                        yaa👌
                                    </h1>
                                )}

                                {dataManga.chapters.map(
                                    (chapter: any, index: any) => (
                                        <li key={chapter.id}>
                                            <Link
                                                className=" bg-base-100 outline outline-1 outline-base-300"
                                                href={`/manga/${dataManga.slug}/${chapter.chapter}`}
                                            >
                                                {index + 1 + ". "}
                                                {chapter.judulChapter}
                                            </Link>
                                        </li>
                                    )
                                )}
                            </ul> */}
                        {/* </div> */}
                    </div>
                )}
            </div>
        </>
    );
};

export default MangaDetailPage;
