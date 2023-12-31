import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcrypt";
import { register } from "@/utils/firebase/auth/services";
import { HttpStatusCode } from "axios";

export async function POST(request: NextRequest) {
	const req = await request.json();
	const { email, password } = req;
	const passwordHash = await bcrypt.hash(password, 10);

	const data = {
		email,
		password: passwordHash,
	};

	if (await register(data)) {
		return NextResponse.json(
			{
				status: HttpStatusCode.Ok,
				message: "Akun anda sudah terdaftar, silahkan login!",
			},
			{
				status: HttpStatusCode.Ok,
			},
		);
	} else {
		return NextResponse.json(
			{
				status: HttpStatusCode.Conflict,
				message: "Email sudah terdaftar, coba gunakan email lain!",
			},
			{
				status: HttpStatusCode.Conflict,
			},
		);
	}
}
