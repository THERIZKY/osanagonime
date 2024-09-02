import prisma from "../../../prisma/prisma";

export const getAllUsers = async () => {
    const data = await prisma.users.findMany();
    return data;
};

export const getUsersByEmail = async (email: string) => {
    const data = await prisma.users.findMany({
        where: {
            email: {
                equals: email,
            },
        },
    });

    return data;
};

// Register Models
export const register = async (data: { username: string; email: string; password: string }) => {
    const { username, email, password } = data;

    try {
        const userId = await prisma.users.create({
            data: {
                username,
                email,
                password,
            },
        });

        return {
            status: "success",
            id: userId,
            message: "Register Success",
        };
    } catch (error) {
        return {
            status: "failed",
            message: "Register Failed with error " + error,
        };
    }
};
