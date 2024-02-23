import { useRouter, useSearchParams, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

import { urlParams } from "@/utils/function/function";

const SearchChapterForm = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [search, setSearch] = useState("");
	const { push } = useRouter();
	const searchParams = useSearchParams();
	const pathname = usePathname();

	useEffect(() => {
		const delayedSearch = setTimeout(() => {
			let newUrl = "";
			if (search) {
				newUrl = urlParams({
					params: searchParams.toString(),
					key: "query",
					pathname,
					value: search,
				});
			} else {
				newUrl = pathname;
			}

			push(newUrl, { scroll: false });
		}, 300);

		return () => clearTimeout(delayedSearch);
	}, [search]);

	return (
		<div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
			<div className="w-full md:w-1/2">
				{/* Buat Search */}
				<form className="flex items-center">
					<label htmlFor="simple-search" className="sr-only">
						Search
					</label>
					<div className="relative w-full">
						<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
							<svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<path
									fillRule="evenodd"
									d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
									clipRule="evenodd"
								/>
							</svg>
						</div>
						<input
							type="text"
							id="search"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
							placeholder="Search"
							onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.currentTarget.value)}
						/>
					</div>
				</form>
				{/* akhir search */}
			</div>
			{/* Button add data */}
			<div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
				<button
					type="button"
					className="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
					disabled={isLoading}
					onClick={() => {
						setIsLoading(true);
						push("/admin/chapter/add");
					}}
				>
					{isLoading ? (
						""
					) : (
						<svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
							<path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
						</svg>
					)}
					{isLoading ? "Loading..." : "Add Chapter"}
				</button>
			</div>
		</div>
	);
};

export default SearchChapterForm;
