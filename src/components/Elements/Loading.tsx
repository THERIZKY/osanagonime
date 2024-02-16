import Image from "next/image";
const Loading = () => {
	return (
		<>
			<div className="flex justify-center items-center h-screen gap-10 overflow-hidden">
				<Image src={"/loading.svg"} width={300} height={300} priority alt="loading" />
			</div>
		</>
	);
};

export default Loading;
