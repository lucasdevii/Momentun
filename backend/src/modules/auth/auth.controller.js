import { findFirstUser, findUserByEmail, isValidEmail, createUser, findUserByUsername } from '../user/user.service.js'
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

export const login = async (req, res) => {
    const {email, password} = req.body;   

    if(!email || !password){
        return res.status(401).json({message: "Preencha os campos corretamente."});
    }

    if(!isValidEmail(email)){
        return res.status(401).json({message: "Email inválido"});
    }  

    const user = await findUserByEmail(email);
    if(!user){
        return res.status(401).json({message: "Email ou senha incorretos."})
    }

    const isEquals = await bcrypt.compare(password, user.password);
    if(!isEquals){
        return res.status(401).json({message: "Email ou senha incorretos."})
    }

    const safeUser =  { display_name: user.display_name, username: user.username, email: user.email } 

    //Adicionar JWT SESSION
    const token = jwt.sign(
        {id: user.id}, 
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
    );

    return res.status(200).json({user: safeUser, token: token})
}

export const register = async (req, res) => {
    console.log("asdasd")
    const {password, passwordConfirm, email, username} = req.body
    let errors = []

    // ------------- TRATAMENTO DE ERROS -----------------
    if ( //Verifica se cada campo veio em formato de string
        typeof password !== 'string' ||
        typeof passwordConfirm !== 'string' ||
        typeof email !== 'string' ||
        typeof username !== 'string'
    ) {
        errors.push('Informações inválidas.')
        return res.status(400).json({errors: errors})
    }
    if (!isValidEmail(email)) {
        errors.push('Email inválido.')
    }
    if (password !== password.trim()){
        errors.push('A senha não pode ter espaços.')
    }
    if (password !== passwordConfirm) {
        errors.push('As senhas não coincidem.')
    }
    if (password.trim().length < 7) {
        errors.push('A senha deve conter 7 ou mais caracteres.')
    }
    if (username.trim().length < 5) {
        errors.push('O nome deve conter 5 ou mais caracteres.')
    }
    //Se tiver erros retorna-os
    if (errors.length) { 
        return res.status(401).json({ errors: errors }) 
    }
    const usernameExists = await findUserByUsername(username)
    if (usernameExists) errors.push('username já utilizado.') 

    const emailExists = await findUserByEmail(email)
    if (emailExists) errors.push('Email já utilizado.')

    if(errors.length) return res.status(401).json({ errors: errors })

    const passwordHash = await bcrypt.hash(password, Number(process.env.BCRYPT_SALT))

    const user = await createUser({username: username, email: email, password: passwordHash})
    //Lógica de criação:
    const token = jwt.sign(
        { id: user.id },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
    )

    const safeUser =  { username: user.username, email: user.email } 

    //Se não tiver erros retorna bem sucedido
    return res.status(201).json({ user: safeUser, token: token })
}