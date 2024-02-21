import Container from "@/components/Elements/Container";
import Login from "@/components/Layouts/Auth/Login";

const LoginPages = ({ searchParams }: any) => {
	return (
		<Container className="flex justify-center items-center w-100 h-screen overflow-hidden grow animate__animated animate__fadeInDown ">
			<Login params={searchParams} />
		</Container>
	);
};

export default LoginPages;
