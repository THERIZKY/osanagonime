import Link from "next/link";

export default function MangaNavigation() {
	return (
		<div>
			<div className="btm-nav">
				{/* Back Button */}
				<Link href={""} className="text-success">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="24"
						width="21"
						viewBox="0 0 448 512"
					>
						<path
							fill="#00ff04"
							d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
						/>
					</svg>
				</Link>

				{/* Tempat Judul Sama Inform nanti */}
				<Link href={""} className="text-success active">
					<div>
						<h1>Ini Title Dari Manga nya nanti</h1>
					</div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
				</Link>

				{/* Next Button */}
				<Link href={""} className="text-success">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="24"
						width="21	"
						viewBox="0 0 448 512"
					>
						<path
							fill="#00ff04"
							d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
						/>
					</svg>
				</Link>
			</div>
		</div>
	);
}
