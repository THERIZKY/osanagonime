import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "500", subsets: ["latin"] });

const Admin = () => {
    const name = "Owner Rizh";
    return (
        <>
            <div>
                <h1 className={`text-3xl font-bold  ${poppins.className}`}>Hello {name}</h1>
                <div className="text-xl font-bold">
                    <h2>Here is the dashboard</h2>
                </div>
            </div>
        </>
    );
};

export default Admin;
