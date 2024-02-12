import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcrypt";
import { register } from "@/utils/firebase/auth/services";
import { HttpStatusCode } from "axios";
import { postUser } from "@/utils/mysql/post/service";

export async function POST(request: NextRequest) {
	const req = await request.json();
	const { username, email, password } = req;
	const passwordHash = await bcrypt.hash(password, 10);

	const data = {
		username,
		email,
		password: passwordHash,
	};

	const res = await postUser(data);

	if (res?.userExists !== null) {
		return NextResponse.json(
			{
				status: HttpStatusCode.Conflict,
				message: "email already exists",
			},
			{
				status: HttpStatusCode.Conflict,
			}
		);
	}

	return NextResponse.json({
		status: HttpStatusCode.Ok,
		message: "Register Successfull",
	});
}
