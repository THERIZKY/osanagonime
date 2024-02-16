import Login from "@/components/Layouts/Login";

const LoginPages = ({ searchParams }: any) => {
	return (
		<div className="flex justify-center items-center w-100 h-screen overflow-hidden grow animate__animated animate__fadeInDown ">
			<Login params={searchParams} />
		</div>
	);
};

export default LoginPages;
