import Login from "@/components/Layouts/Auth/Login";
const LoginPages = ({ searchParams }: any) => {
	return (
		<div className="flex h-screen justify-center items-center grow animate__animated animate__fadeInDown ">
			<Login params={searchParams} />
		</div>
	);
};

export default LoginPages;
