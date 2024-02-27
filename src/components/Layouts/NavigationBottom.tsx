import Link from "next/link";
import { HiChevronDoubleLeft, HiChevronDoubleRight, HiHome, HiBookOpen, HiListBullet } from "react-icons/hi2";

const NavigationBottom = () => {
	return (
		<>
			<div className="btm-nav bg-gray-800 ">
				{/* Previous */}
				<Link href={""} className="text-slate-300 w-12 h-12 md:w-14 md:h-14">
					<HiChevronDoubleLeft size={60} />
					<p className="text-xs md:text-md">Previous Chapter</p>
				</Link>

				{/* Update Chapter (Nanti Dibuat Modal Aja) */}
				<Link href={""} className="text-slate-300 w-12 h-12 md:w-14 md:h-14">
					<HiBookOpen size={60} />
					<p className="text-xs md:text-md">Update</p>
				</Link>

				{/* Home */}
				<Link href={""} className="text-slate-300 w-12 h-12 md:w-14 md:h-14">
					<HiHome size={60} />
					<p className="text-xs md:text-md">Home</p>
				</Link>

				{/* Chapter List */}
				<Link href={""} className="text-slate-300 w-12 h-12 md:w-14 md:h-14 order-4">
					<HiListBullet size={60} />
					<p className="text-xs md:text-md">Daftar Isi</p>
				</Link>

				{/* Next Chapter */}
				<Link href={""} className="text-slate-300 w-12 h-12 md:w-14 md:h-14 order-5">
					<HiChevronDoubleRight size={60} />
					<p className="text-xs md:text-md">Next Chapter</p>
				</Link>
			</div>
		</>
	);
};

export default NavigationBottom;
