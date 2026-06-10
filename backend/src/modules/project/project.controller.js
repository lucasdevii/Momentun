import { asyncHandler } from '../../utils/wrappers.js';
import { createProject, getProjectById } from './project.service.js';

export const newProject = asyncHandler(async (req, res) => {
    const userId = req.user.id;

    const rawName = req.body?.name;
    const rawDescription = req.body?.description;

    console.log(req.body);
    console.log(typeof req.body?.name);
    console.log(req.body?.name);

    const name = typeof rawName === 'string' ? rawName.trim() : null;

    const description = 
        typeof rawDescription === 'string' ? rawDescription : 
        rawDescription == null ? null : undefined;

    const errors = [];

    if (!name) {
        errors.push({
            message: 'Nome em formato inválido.',
            type: 'name'
        });
    } else if (name.length > 100) {
        errors.push({
            message: 'Nome deve conter no máximo 100 caracteres.',
            type: 'name'
        });
    }

    if (description === undefined) {
        errors.push({
            message: 'Descrição em formato inválido.',
            type: 'description'
        });
    } else if (description && description.length > 1000) {
        errors.push({
            message: 'Descrição deve conter no máximo 1000 caracteres.',
            type: 'description'
        });
    }

    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }

    const project = await createProject({
        userId,
        name,
        description
    });

    const projectFormatted = {
        ...project.adminRelation,
        project: project.project
    }

    return res.status(201).json({
        message: 'Projeto criado com sucesso.',
        project: projectFormatted
    });
});

export const getProject = asyncHandler(async (req, res) => {
    const id = Number(req.params?.id);

    if(!id){
        return res.status(400).json({
            error: 'ID é obrigatório.'
        });
    }

    const project = await getProjectById(id);

    if(!project){
        return res.status(404).json({
            error: 'Projeto não encontrado.'
        });
    }

    console.log(project);

    if(!project.members.some(member => member.user_id === req.user.id)){
        return res.status(401).json({
            error: 'Usuário não tem acesso a esse projeto.'
        });
    }

    return res.status(200).json({
        project
    });
});