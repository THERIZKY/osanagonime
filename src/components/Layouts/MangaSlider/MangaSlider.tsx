"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const ImageSlide = ({ image }: any) => {
    return (
        <div className="flex flex-col gap-2 justify-center items-center">
            {image &&
                image.map((item: string, index: number) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: -1000 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <Image
                            priority
                            key={index}
                            src={item}
                            width={900}
                            height={900}
                            alt="image for read"
                            className="object-cover w-[1500px] "
                        />
                    </motion.div>
                ))}
        </div>
    );
};

export default ImageSlide;
