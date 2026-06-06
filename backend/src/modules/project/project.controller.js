import {asyncHandler} from '../../utils/wrappers.js'
import { createProject } from './project.service.js'

export const newProject = asyncHandler(async (req, res, next) => {
    const userId = req.user.id
    const {name, description} = req.body

    let error = [];
    
    if(typeof name !== "string" || !name.trim()){
        error.push({message: "Nome em formato inválido.", type: "name"})
    }

    if(!description){
        description = null
    }
    else if(typeof description !== "string" || !description.trim()){
        error.push({message: "Descrição em formato inválido.", type: "description"})
    }

    if(error.length > 0){
        return res.status(400).json({error: error})
    }

    const project = await createProject({userId, name, description})
    console.log(project)

    return res.status(201).json({message: "Projeto criado com sucesso."})
})