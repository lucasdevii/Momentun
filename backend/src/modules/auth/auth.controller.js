import { findFirstUser, findUserByEmail, isValidEmail, createUser, findUserByUsername } from '../user/user.service.js'
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { registerValidateForm } from '../../validators/auth.validate.js';

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

    const dataForm = {password, passwordConfirm, email, username}

    const errors = registerValidateForm(dataForm);

    //Se tiver erros retorna-os
    if (errors.username.length || errors.email.length || errors.password.length || errors.passwordConfirm.length || errors.all.length) { 
        return res.status(401).json({ errors: errors }) 
    }

    const usernameExists = await findUserByUsername(username)
    if (usernameExists) errors.username.push('username já utilizado.')

    const emailExists = await findUserByEmail(email)
    if (emailExists) errors.email.push('Email já utilizado.')

    //Se tiver erro de conflito com users já existentes retorna-os
    if(errors.username.length || errors.email.length || errors.password.length || errors.passwordConfirm.length || errors.all.length) return res.status(401).json({ errors: errors })

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