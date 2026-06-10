<template>
    <div class="w-full h-screen">
        
    </div>
</template>
<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { getProject } from '../../services/project.services';

const route = useRoute();
const project = ref(null);

const loadProject = async () => {
    try {
        project.value = await getProject(Number(route.params?.id));
        console.log('Projeto:', project.value);
    } catch (error) {
        console.error('Erro ao carregar o projeto:', error);
    }
};

watch(
    () => route.params.id,
    async (newId) => {
        if (newId) {
            await loadProject();
        }
    },
    { immediate: true }
);
</script>