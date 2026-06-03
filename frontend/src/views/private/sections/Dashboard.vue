<script setup>
import { user } from '../../../utils/contexts/user.context';

const projects = [
        {
            name: "blubluasdasdasdasdas",
            description: "Balosdjnasldnasldnasdasdsadasdasd",
        },
        {
            name: "blabla",
            description: null
        },
    ]
</script>
<template>
    <div>
        <div class="flex space-x-3 px-3 py-8">
            <div v-for="project in projects" class="border w-80 h-52 rounded-xl p-3">
                <h1 class="text-2xl">{{ project?.name }}</h1>
                <p class="text-xs">{{ project?.description }}</p>
            </div>
        </div>
    </div>
</template>