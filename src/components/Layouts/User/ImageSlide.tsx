"use client";
import Image from "next/image";

const ImageSlide = ({ image }: any) => {
	return (
		<div className="flex flex-col gap-2 justify-center items-center">
			{image &&
				image.map((item: string, index: number) => <Image priority key={index} src={item} width={1500} height={1500} alt="image for read" className="object-cover" />)}
		</div>
	);
};

export default ImageSlide;
