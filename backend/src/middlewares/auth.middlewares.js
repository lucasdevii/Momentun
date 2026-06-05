import { verifyToken } from "../utils/jwt"

export const requireAuth = (req, res, next) => {
    const token = req.cookies?.token

    if(!token){
        return res.status(401).json({message: "Usuário não autenticado."})
    }

    const {payload, error} = verifyToken(token)

    if(error){
        res.clearCookie('token')

        return res.status(401).json({message: error === 'expired'? "Token expirado." : "Token inválido."})
    }

    req.user = payload
    next();
}

export const requireGuest = (req, res, next) => {
    const token = req.cookies?.token

    if(token){
        const {payload, error} = verifyToken(token)
        if(error){
            res.clearCookie('token')
            next()
        }
        return res.status(403).json({message: 'Usuários autenticados não podem acessar essa rota.'})
    }
    
    next()
}