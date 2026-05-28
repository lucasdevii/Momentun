import jwt from 'jsonwebtoken'
import { findUserById } from '../user/user.service'
import { asyncWrapper } from '../../globalUtils/wrappers'

export const requireAuth = asyncWrapper(async (req, res, next) => {
    const token = req.cookies.token
    
    const payload = jwt.verify(token, process.env.SECRET_KEY)

    //Adicionar lógica de expiresDate no jwt

    const user = await findUserById(payload.id)
    const {password, ...safeUser} = user
    req.user = safeUser;

    next()
})
export const requireGuest = asyncWrapper((req, res, next) => {
    const token = req.cookies.token

    if(!token){
        next()
    }

    //Adicionar lógica de expiresDate no jwt

    res.status(401).json({message: "Você já esta logado em uma conta."})
    
})