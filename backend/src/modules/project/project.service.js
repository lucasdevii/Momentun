import prisma from "../../../database/prisma/prisma.ts"

export const createProject = async ({userId, name, description = null}) => {
    return await prisma.$transaction(async (tx) => {
        const project = await tx.projects.create({
            data: {
                owner_id: userId,
                name: name,
                description: description,
            }
        })
        const adminRelation = await tx.users_projects.create({
            data: {
                project_id: project.id,
                user_id: userId,
                role: 'owner',
            }
        })
        return {project, adminRelation};
    })
}
export const getProjectById = async (projectId) => {
    return await prisma.projects.findUnique({
        where: {
            id: projectId
        },
        include: {
            members: {
                include: {
                    user: {
                        select: {
                            id: true,
                            username: true,
                            email: true,
                        }
                    }
                }
            }
        }
    })
}