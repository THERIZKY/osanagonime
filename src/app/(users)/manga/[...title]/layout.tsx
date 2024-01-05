import { Fragment } from "react";

export default function MangaLayout({
	children,
	manga,
	navigation,
}: {
	children: React.ReactNode;
	manga: React.ReactNode;
	navigation: React.ReactNode;
}) {
	return (
		<Fragment>
			<div className="flex flex-col">
				<div className="pb-[4rem]">{children}</div>
				<div>{navigation}</div>
			</div>
		</Fragment>
	);
}
