import Register from "@/components/Layouts/Auth/Register";
import Content from "@/components/Elements/Content";
import Loading from "../loading";
import { Suspense } from "react";

const RegisterPage = async () => {
	return (
		<Content className="flex justify-center items-center w-100 h-screen overflow-hidden grow animate__animated animate__fadeInDown">
			<Suspense fallback={<Loading />}>
				<Register />
			</Suspense>
		</Content>
	);
};

export default RegisterPage;
