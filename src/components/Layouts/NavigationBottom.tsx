import Link from "next/link";
import React from "react";

const NavigationBottom = () => {
	return (
		<div className="">
			<div className="btm-nav bg-gray-800 ">
				<div className=" order-3">
					<Link href={""} className="w-10 h-10 text-blue-500 bg-slate-800 rounded-full -top-1 border-2 border-blue-500 p-4  relative flex items-center justify-center">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-7 h-7 absolute top-1/2 -translate-y-1/2" fill="currentColor">
							<path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
						</svg>
					</Link>
				</div>
				{/* Back Button */}
				<Link href={""} className="text-slate-300 w-12 h-12 md:w-14 md:h-14">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" className="w-full h-full object-cover">
						<path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
					</svg>
					<p className="text-xs md:text-md">Beranda</p>
				</Link>
				<Link href={""} className="text-slate-300 w-12 h-12 md:w-14 md:h-14">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" className="w-full h-full object-cover">
						<path d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z" />
					</svg>
					<p className="text-xs md:text-md">Update</p>
				</Link>

				{/* Tempat Judul Sama Inform nanti */}
				{/* <Link href={""} className="text-slate-300 w-12 h-12 md:w-14 md:h-14 active">
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
        </Link> */}

				{/* Next Button */}
				<Link href={""} className="text-slate-300 w-12 h-12 md:w-14 md:h-14 order-4">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-full h-full object-cover">
						<path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z" />
					</svg>
					<p className="text-xs md:text-md">Daftar Isi</p>
				</Link>
				<Link href={""} className="text-slate-300 w-12 h-12 md:w-14 md:h-14 order-5">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
						<path
							d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
							className="w-full h-full object-cover"
						/>
					</svg>
					<p className="text-xs md:text-md">Akun</p>
				</Link>
			</div>
		</div>
	);
};

export default NavigationBottom;
