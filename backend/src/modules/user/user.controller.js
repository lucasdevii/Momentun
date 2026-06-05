import jwt from "jsonwebtoken"
import { findUserById } from "./user.service.js"
import { asyncHandler } from "../../utils/wrappers.js"

export const userInfos = asyncHandler(async (req, res) => {
    if(!req.cookies){
        return res.status(401).json({message: "Usuário não esta logado.",})
    }
    const userId = jwt.verify(req.cookies.token, process.env.JWT_SECRET).id
    const user = await findUserById(userId)
    if(!user){
        res.clearCookie("token")
        return res.status(401).json({message: "Usuário não encontrado.",})
    }
    const safeUser = {
        username: user.username,
        display_name: user.display_name,
        email: user.email
    }
    return res.status(200).json(safeUser)
})