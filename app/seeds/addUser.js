const { PrismaClient } = require("@prisma/client");
const users = require('./user')

async function main() {
    const prisma = new PrismaClient();
    for await (const user of users) {
        await prisma.user.create({
            data: {
                name: user.name,
                username: user.username,
                image: user.image,
                note: {
                    create: {
                        content: user.content
                    }
                }
            }
        })
    }
}

main()
