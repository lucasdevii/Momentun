import prisma from "../../../database/prisma/prisma"
import { asyncWrapper } from "../../globalUtils/wrappers"
import { findUserById } from "./user.service"

export const profile = asyncWrapper(async (req, res) => {
    const userId = req.user.id
    const user = await findUserById(userId)
    const {password, ...safeUser} = user
    res.status(200).json({message: "Informações retornadas.", user: safeUser})
})