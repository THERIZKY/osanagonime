import Register from "@/components/Layouts/Auth/Register";
import { Suspense } from "react";
import Loading from "@/components/Elements/Loading";
import { registerController } from "@/utils/controller/authController";

const RegisterPage = async () => {
    return (
        <div className="flex h-screen justify-center items-center grow animate__animated animate__fadeInDown ">
            <Suspense fallback={<Loading />}>
                <Register action={registerController} />
            </Suspense>
        </div>
    );
};

export default RegisterPage;
