import Image from "next/image";
const LoadingAnimation = () => {
    return (
        <>
            <div className="flex justify-center items-center w-full h-screen gap-10 overflow-hidden">
                <Image
                    src={"/loading.svg"}
                    width={300}
                    height={300}
                    priority
                    alt="loading"
                />
            </div>
        </>
    );
};

export default LoadingAnimation;
