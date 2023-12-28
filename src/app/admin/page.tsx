"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { Fragment, useEffect } from "react";
import { redirect, useRouter } from "next/navigation";

// Interface TS
interface sessionInterface {
	user: {
		name: string;
		email: string;
		role: string;
	};
}

/*******************Admin Component********************/
export default function Admin() {
	const {
		data: session,
		status,
	}: { data: sessionInterface | any; status: string } = useSession();
	const router = useRouter();
	console.log(session);
	console.log(status);

	useEffect(() => {
		if (status === "unauthenticated") {
			redirect("/login");
		} else {
			if (session !== undefined && session?.user.role !== "admin") {
				redirect("/");
			}
		}
	}, [session, session?.user.role, status]);
	return (
		<Fragment>
			<div className="content flex items-center w-full h-12 ">
				<h3 className="text-white uppercase font-bold">Dashboard</h3>
			</div>
			<div className="tab-container justify-around flex ">
				<div className="w-1/5 h-[150px] bg-orange-200">test</div>
				<div className="w-1/5 h-[150px] bg-orange-200">test</div>
				{status === "unauthenticated" ? (
					<div
						className="w-1/5 h-[150px] bg-orange-200 hover:scale-125"
						onClick={() => signIn()}
					>
						Sign In
					</div>
				) : (
					<div
						className="w-1/5 h-[150px] bg-orange-200 hover:scale-125"
						onClick={() => signOut()}
					>
						Log Out
					</div>
				)}
			</div>
		</Fragment>
	);
}
