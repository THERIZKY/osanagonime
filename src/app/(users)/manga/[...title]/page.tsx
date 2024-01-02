import Image from "next/image";

export default function MangaPage() {
	const data = [
		`https://i.postimg.cc/F1tfPmD4/001.jpg`,
		`https://i.postimg.cc/x1DH5G4z/002.jpg`,
		`https://i.postimg.cc/SQ1f6M46/003.jpg`,
		`https://i.postimg.cc/xjBtrzZ0/004.png`,
		`https://i.postimg.cc/0N9SRkx5/005.jpg`,
		`https://i.postimg.cc/43w9XDN6/006.jpg`,
		`https://i.postimg.cc/TwwW1tpZ/007.jpg`,
		`https://i.postimg.cc/vZrnN1JS/008.jpg`,
		`https://i.postimg.cc/YCYNBDWR/009.jpg`,
		`https://i.postimg.cc/SsTCfwBS/010.jpg`,
	];
	return (
		<div className="w-full bg-slate-700 flex flex-col items-center justify-center">
			{data.map((item, index) => {
				return (
					<Image
						key={index}
						src={item}
						width={1500}
						height={1500}
						alt="image"
						className="object-contain"
					/>
				);
			})}
		</div>
	);
}
