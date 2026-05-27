import { findFirstUser, findUserByEmail, isValidEmail } from '../user/user.service.js'
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"



export const login = async (req, res) => {
    const {email, password} = req.body;   

    if(!email || !password){
        return res.status(400).json({message: "Preencha os campos corretamente."});
    }

    if(!isValidEmail(email)){
        return res.status(400).json({message: "Email inválido"});
    }  

    const user = await findUserByEmail(email);
    if (!user){
        return res.status(400).json({message: "Email ou senha incorretos."})
    }
    const isEquals = await bcrypt.compare(password, user.password);

    if(!isEquals){
        return res.status(400).json({message: "Senha incorreta."})
    }

    const { password, ...safeUser } = user 

    //Adicionar JWT SESSION
    const token = jwt.sign({id: user.id}, process.env.SECRET_KEY);

    res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "strict",
    })
    return res.status(200).json({message: `Bem vindo! ${user.username}.`, user: safeUser})
}



export const register = async (req, res) => {
    const {password, passwordConfirm, email, username} = req.body
    let errors = []

    if ( //Verifica se cada campo veio em formato de string
        typeof password !== 'string' ||
        typeof passwordConfirm !== 'string' ||
        typeof email !== 'string' ||
        typeof username !== 'string'
    ) {
        errors.push('Informações inválidas.')
    }
    if (!errors.length) {

        if (!isValidEmail(email)) {
            errors.push('Email inválido.')
        }

        if (password !== passwordConfirm) {
            errors.push('As senhas não coincidem.')
        }

        if (password.length < 7) {
            errors.push('A senha deve conter 7 ou mais caracteres.')
        }

        if (username.length < 5) {
            errors.push('O nome deve conter 5 ou mais caracteres.')
        }
    }
    const existsUser = await findFirstUser({id: null, email: email, username: username})
    if (existsUser) {
        if(existsUser.name == username) errors.push('Esse nome já esta sendo utilizado.')
        else if(existsUser.email == email) errors.push('Esse email já esta sendo utilizado.')
    }
    //Se tiver erros retorna-os
    if (errors.length) { 
        return res.status(400).json({ errors: errors }) 
    }


    //Lógica de criação:
    const user = await createUser(username, email, password) //Arrumar isso aqui
    const {password, ...safeUser} = user 

    res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "strict",
    })
    //Se não tiver erros retorna bem sucedido
    return res.status(201).json({ message: 'Usuário criado com sucesso!', user: safeUser })
}
export const logout = (req, res) => {
    res.clearCookie("token")
    res.status(200).json({message: "Logout realizado."})
}