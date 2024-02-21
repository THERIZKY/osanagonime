import Image from "next/image";
import Link from "next/link";
export default function Card({ children }: { children: React.ReactNode }) {
	return (
		<div className="card w-96 h-[40rem] p-5 bg-slate-800 shadow-xl overflow-auto ">
			{children}
		</div>
	);
}

function CardHeader({ image }: any) {
	return (
		<figure>
			<Image
				height={200}
				width={300}
				src={image}
				alt="Shoes"
				className="rounded-xl"
			/>
		</figure>
	);
}

function CardBody({ title, description }: any) {
	return (
		<div className="card-body">
			<h2 className="card-title">
				{title}

				{/* Ini Juga Jangan Di apus */}
				{/* <div className="badge badge-secondary">NEW</div> */}
			</h2>
			<p>{description.slice(0, 97)}...</p>

			{/* Jangan Diapus Nanti Kepake! */}
			{/* <div className="card-actions justify-end">
				<div className="badge badge-outline">Fashion</div>
				<div className="badge badge-outline">Products</div>
			</div> */}
		</div>
	);
}

function CardFooter({ slug }: any) {
	return (
		<footer className="card-footer w-full">
			<Link href={"/manga/" + slug} className="btn w-full btn-secondary">
				More Info
			</Link>
		</footer>
	);
}

Card.header = CardHeader;
Card.body = CardBody;
Card.footer = CardFooter;
