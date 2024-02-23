import Register from "@/components/Layouts/Auth/Register";
import { Suspense } from "react";
import Loading from "@/components/Elements/Loading/Loading";

const RegisterPage = async () => {
	return (
		<div className="flex h-screen justify-center items-center grow animate__animated animate__fadeInDown">
			<Suspense fallback={<Loading />}>
				<Register />
			</Suspense>
		</div>
	);
};

export default RegisterPage;
