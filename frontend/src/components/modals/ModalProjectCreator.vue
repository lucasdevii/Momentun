<template>
    <div class="absolute w-full h-screen flex justify-center items-center bg-black/30 z-40">
        <form @submit.prevent="callCreateProject" class="bg-(--minucious-secondary-color) w-136 p-5 rounded-lg" >
            <div class="w-full flex justify-center">
                <h1 class="text-2xl font-bold">Informações do projeto</h1>                
            </div>
            <div class="space-y-4">
                <div>
                    <label for="name" class="font-bold">Nome</label>
                    <input type="text" id="name" v-model="name">
                    <span class="text-red-400">{{error.name}}</span>
                </div>
                <div>
                    <label for="description" class="font-bold">Descrição</label>
                    <textarea id="description" v-model="description" class="bg-(--minucious-secondary-color) border-2 border-(--minucious-primary-color) w-full h-32"></textarea>
                    <span class="text-red-400">{{error.all}}</span>
                </div>
                
            </div>
            <div class="mt-5">
                <button type="submit">Criar</button>
            </div>
        </form>
    </div>
</template>
<script setup>
import { ref } from "vue";
import { createProject } from "../../services/project.services.js";
import { user } from "../../utils/contexts/user.context.js"

const props = defineProps({
    closeModal: {
        type: Function
    }
})

const name = ref("New Project");
const description = ref("");

const error = ref({
    name: null,
    all: null
});

const callCreateProject = async () => {
    if (!name.value.trim()) {
        error.value.name = "Preencha o campo Nome.";
        return;
    }

    const projectInfos = {
        name: name.value,
        description: description.value
    };

    const res = await createProject(projectInfos);

    console.log(res)

    if (!res || !res.success) {
        error.value.all = "Erro no servidor.";
        return
    }

    const createdProject = res.data?.project

    if (!createdProject) {
        error.value.all = "Resposta inesperada do servidor.";
        return
    }

    user.projects.push(createdProject)
    console.log(user.projects)
    props.closeModal()
};
</script>