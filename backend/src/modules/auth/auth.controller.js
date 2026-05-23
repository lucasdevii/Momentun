import { isValidEmail } from '../user/user.service.js'
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

    const user = await findUser(email);

    const isIguals = await bcrypt.compare(password, user.password);

    if(!isIguals){
        return res.status(400).json({message: "Senha incorreta"})
    }

    const { passwordUser, safeUser } = user 

    return res.status(200).json({message: `Bem vindo! ${user.name}.`, user: safeUser})
}



export const register = (req, res) => {
    const {password, passwordConfirm, email, name} = req.body
    let errors = []

    if ( //Verifica se cada campo veio em formato de string
        typeof password !== 'string' ||
        typeof passwordConfirm !== 'string' ||
        typeof email !== 'string' ||
        typeof name !== 'string'
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
            errors.push(
                'A senha deve conter 7 ou mais caracteres.'
            )
        }

        if (name.length < 5) {
            errors.push(
                'O nome deve conter 5 ou mais caracteres.'
            )
        }
    }
    //Se tiver erros retorna-os
    if (errors.length) { 
        return res.status(400).json({ errors: errors }) 
    }

    //Lógica de criação:
    const user = await createUser(name, email, password)
    const {passwordDb, ...secureUser} = user 

    //Se não tiver erros retorna bem sucedido
    return res.status(201).json({ message: 'Usuário criado com sucesso!', user: user })
}