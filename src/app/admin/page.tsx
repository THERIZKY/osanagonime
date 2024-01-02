"use client";
import { Fragment, useEffect } from "react";

/*******************Admin Component********************/
export default function Admin() {
	return (
		<Fragment>
			<div className="content flex items-center w-full h-12 ">
				<h3 className="text-white uppercase font-bold">Dashboard</h3>
			</div>
			<div className="tab-container justify-around flex ">
				<div className="w-1/5 h-[150px] bg-orange-200">test</div>
				<div className="w-1/5 h-[150px] bg-orange-200">test</div>
				<div className="w-1/5 h-[150px] bg-orange-200">test</div>
			</div>
		</Fragment>
	);
}
