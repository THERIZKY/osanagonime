"use client";
import { useRouter } from "next/navigation";
import { CiFileOff } from "react-icons/ci";

const NotFound = () => {
    const { back } = useRouter();

    return (
        <div>
            <div className="flex flex-col justify-center items-center h-screen">
                <div className="text-9xl text-white outline-4 outline-red-700">
                    <CiFileOff size={200} color="#f87171" />
                </div>
                <h3 className="text-3xl">Page Not Found</h3>
                <p className="pt-10">halaman yang anda cari tidak ditemukan</p>
                <button className="btn btn-ghost btn-wide" onClick={() => back()}>
                    Kembali
                </button>
            </div>
        </div>
    );
};

export default NotFound;
