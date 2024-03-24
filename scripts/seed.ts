const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {
    try {
        await db.category.createMany({
            data: [
                { name: "Gaming" },
                { name: "NFTs" },
                { name: "Finance" },
                { name: "E-Commerce" },
                { name: "Videos" },
                { name: "Social Media" },
            ]
        })

    } catch (error) {
        console.error("Error seeding default categories", error);
    } finally {
        await db.$disconnect();
    }
};

main();