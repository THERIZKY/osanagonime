import Image from "next/image";

export default function Card({ children }: { children: React.ReactNode }) {
	return <div className="card w-[15rem] h-[20rem] bg-slate-800 shadow-xl overflow-hidden">{children}</div>;
}

function CardHeader({ image }: any) {
	return (
		<div className="w-full  h-1/2 image-full bg-white">
			<Image height={300} width={500} src={image} alt="cover manga" className=" object-cover rounded-xl -z-10" />
		</div>
	);
}

function CardBody({ title }: any) {
	return (
		<div className="card-body flex justify-between bg-base-100/80 z-10 1/2 w-full">
			<h2 className="card-title">
				{title.slice(0, 28)}

				{/* Ini Juga Jangan Di apus */}
				<div className="badge badge-secondary w-10 text-xs">NEW</div>
			</h2>

			{/* Jangan Diapus Nanti Kepake! */}
			<div className="card-actions justify-end">
				<div className="badge badge-outline">Fashion</div>
				<div className="badge badge-outline">Products</div>
			</div>
		</div>
	);
}

function CardFooter({ slug }: any) {
	return (
		<footer className="card-footer w-full">
			<div className="card-actions justify-end">
				<div className="badge badge-outline">Fashion</div>
				<div className="badge badge-outline">Products</div>
			</div>
			{/* <Link href={"/manga/" + slug} className="btn w-full btn-secondary">
				More Info
			</Link> */}
		</footer>
	);
}

Card.header = CardHeader;
Card.body = CardBody;
Card.footer = CardFooter;
