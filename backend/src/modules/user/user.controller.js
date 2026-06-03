import jwt from "jsonwebtoken"
import prisma from "../../../database/prisma/prisma.ts"
import { findUserById } from "./user.service.js"

export const userInfos = async (req, res) => {
    const userId = jwt.verify(req.cookies.token, process.env.JWT_SECRET).id
    const user = await findUserById(userId)
    const safeUser = {
        username: user.username,
        display_name: user.display_name,
        email: user.email
    }
    return res.status(200).json(safeUser)
}