<template>
    <div class="w-full h-screen">
        
    </div>
</template>
<script setup>
import { useRoute } from 'vue-router';
import { watch } from 'vue';
import { getProjectById } from '../../services/project.services';

const route = useRoute();
const project = ref(null)

const loadProject = async () => {
    project.value = await getProjectById(Number(route.params.id))
}

watch(route.params.id, async () => {
    await loadProject();
})
</script>