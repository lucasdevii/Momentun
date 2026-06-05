<script setup>
import { user } from '../../../utils/contexts/user.context';

const projects = [
        {
            id: 1,
            name: "blubluasdasdasdasdas",
            description: "Balosdjnasldnasldnasdzxzxzxzxzxasdasdsadasdasd",
        },
        {
            id: 2,
            name: "blabla",
            description: "asdacaxcxaasd"
        },
    ]
</script>
<template>

    <div class="w-full">
        <h1 class=" px-4 py-3 text-2xl font-semibold mb-4">
            Projetos privados
        </h1>

        <div class="flex gap-4 px-4 py-1 overflow-x-auto pb-2">
            <!-- Novo Projeto -->
            <div
                class="shrink-0 w-72 h-52 rounded-xl border border-dashed border-(--destac-color)
                flex items-center justify-center cursor-pointer
                hover:bg-(--minucious-secondary-color)
                transition-all duration-200 hover:scale-[1.02] "
                @click=""
            >
                <span class="text-4xl">+</span>
            </div>

            <!-- Projetos -->
            <div
                v-for="project in projects"
                :key="project.id"
                class="shrink-0 w-72 h-52 rounded-xl border border-(--destac-color)
                bg-(--bg-current) p-4 hover:bg-(--minucious-secondary-color) cursor-pointer
                hover:shadow-lg transition-all duration-200 hover:scale-[1.02] "
            >
                <h2 class="text-xl font-semibold truncate">
                    {{ project.name }}
                </h2>

                <p class="text-sm mt-2 opacity-75 line-clamp-4">
                    {{ project.description }}
                </p>
            </div>
        </div>

        <hr class="mt-3 border-dashed"> 

        <h1 class=" px-4 py-3 text-2xl font-semibold mb-4">Projetos em equipe</h1>
        <div class="flex gap-4 px-4 py-1 overflow-x-auto pb-2">

            <!-- Projetos -->
            <div
                v-for="project in projects"
                :key="project.id"
                class="shrink-0 w-72 h-52 rounded-xl border border-(--destac-color)
                bg-(--bg-current) p-4 hover:bg-(--minucious-secondary-color) cursor-pointer
                hover:shadow-lg transition-all duration-200 hover:scale-[1.02] "
            >
                <h2 class="text-xl font-semibold truncate">
                    {{ project.name }}
                </h2>

                <p class="text-sm mt-2 opacity-75 line-clamp-4">
                    {{ project.description }}
                </p>
            </div>
        </div>

    </div>
</template>