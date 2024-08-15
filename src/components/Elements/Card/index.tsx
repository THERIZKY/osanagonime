"use client";

import { Card, CardBody, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Cards = ({ item, index }: any) => {
    const { push } = useRouter();

    return (
        <Card shadow="md" key={index} isPressable onPress={() => push(`/manga/${item.slug}`)}>
            <CardBody className="overflow-visible p-0">
                <Image
                    width={200}
                    height={200}
                    alt={item.mangaTitle}
                    className="w-full object-cover h-[140px]"
                    src={item.cover}
                />
            </CardBody>
            <CardFooter className="text-small justify-between">
                <b>{item.judul.slice(0, 14)}...</b>
                <p className="text-default-500">{item.price}</p>
            </CardFooter>
        </Card>
    );
};

export default Cards;
