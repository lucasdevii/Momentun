<template>
    <div
        class="w-full h-full absolute overflow-hidden"
        @contextmenu.prevent.stop="openContextMenu"
        @click="closeContextMenu"
    >
        <ContextMenu
            :menu-visible="menuVisible"
            :menu-x="menuX"
            :menu-y="menuY"
            @create-card="createCard"
            @create-text="createText"
            @create-document="createDocument"
            @open-project-settings="openProjectSettings"
            @close-menu="closeContextMenu"
        />
        <div v-for="card in cards"     
            class="card flex flex-col absolute bg-(--minucious-secondary-color)"
            :style="{
                left: `${card.x}px`,
                top: `${card.y}px`
            }">

            <h1>{{ card.title }}</h1>
            <p>{{ card.description }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import ContextMenu from './WorkspaceContextMenu.vue';

const menuVisible = ref(false);
const menuX = ref(0);
const menuY = ref(0);

const cards = [{
    id: 1,
    title: 'Card 1',
    x: 210,
    y: 100,
    description: 'Descrição do card 1',
}, {
    id: 2,
    title: 'Card 2',
    x: 730,
    y: 200,
    description: 'Descrição do card 2',
}];

const openContextMenu = (event) => {
    menuX.value = event.clientX;
    menuY.value = event.clientY;
    menuVisible.value = true;
};

const closeContextMenu = () => {
    menuVisible.value = false;
};

const createCard = () => {
    console.log('Criar card');
};

const createText = () => {
    console.log('Criar texto');
};

const createDocument = () => {
    console.log('Criar documento');
};

const openProjectSettings = () => {
    console.log('Abrir configurações');
};
</script>
<style scoped>
.card{
    min-width: 10rem;
    min-height: 20rem;
}
</style>