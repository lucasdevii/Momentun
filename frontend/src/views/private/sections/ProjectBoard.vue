<template>
    <div class="h-screen w-full bg-(--minucious-primary-color)" @contextmenu.prevent="openContextMenu">
        <ContextMenu @create-card="createCard" @create-text="createText"/>        
    </div>    
</template>
<script setup>
import ContextMenu from '../../../components/project/WorkspaceContextMenu.vue';
import { ref } from 'vue';

const contextMenuIsOpen = ref(false)

const createCard = () => {
    console.log("Criar card");
}

const createText = () => {
    console.log("Criar texto");
}

const openContextMenu = (event) => {
    console.log(event)
}

</script>