import { PrismaClient } from "@prisma/client";

// let prisma: PrismaClient;
let prisma: any;

declare global {
	var prisma: any;
}

// Rest of the code remains unchanged
if (process.env.NODE_ENV === "production") {
	prisma = new PrismaClient();
} else {
	if (!global.prisma) {
		global.prisma = new PrismaClient();
	}
	prisma = global.prisma;
}

export default prisma;
