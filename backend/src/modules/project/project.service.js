import prisma from "../../../database/prisma/prisma.ts"

export const createProject = async ({userId, name, description = null}) => {
    return await prisma.projects.create({
        data: {
            owner_id: userId,
            name: name,
            description: description,
        }
    })
}