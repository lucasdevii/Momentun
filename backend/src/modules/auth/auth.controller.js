import { isValidEmail } from '../user/user.service.js'
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
export const login = async (req, res) => {

    [email, password] = req.body;   

    if(!email || !password){
        return res.status(400).json({message: "Preencha os campos corretamente."});
    }

    if(!isValidEmail(email)){
        return res.status(400).json({message: "Email inválido"});
    }  

    const user = await findUser(email);

    const isIguals = await bcrypt.compare(password, user.password);

    if(!isIguals){
        return res.status(400).json({message: "Senha incorreta"})
    }

    const {passwordUser, safeUser} = user 

    return res.status(200).json({message: `Bem vindo! ${user.name}`, user: safeUser})
}
export const register = (req, res) => {
    
}