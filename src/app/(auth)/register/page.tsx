import Register from "@/components/Layouts/Auth/Register";
import { Suspense } from "react";
import Loading from "@/components/Elements/Loading";

const RegisterPage = async () => {
    //Fungsi Register
    const SignUp = async (formData: FormData) => {
        "use server";
        const { username, email, password, confirm_password } =
            Object.fromEntries(formData.entries());
    };

    return (
        <div className="flex h-screen justify-center items-center grow animate__animated animate__fadeInDown ">
            <Suspense fallback={<Loading />}>
                <Register action={SignUp} />
            </Suspense>
        </div>
    );
};

export default RegisterPage;
