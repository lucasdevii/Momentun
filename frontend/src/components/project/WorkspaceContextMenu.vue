<template>
    <section
        @contextmenu.prevent="openMenu"
        @click="closeMenu"
        class="w-full h-full relative"
    >

        <div
            v-if="menuVisible"
            class="fixed w-44 h-60 bg-(--bg-main) rounded-lg shadow-lg p-2 z-50 flex flex-col space-y-1"
            :style="{
                left: `${menuX}px`,
                top: `${menuY}px`
            }"
        >
            <button
                @click="createCard"
                class="sections"
            >
                ➕ Nova tarefa
            </button>

            <button
                @click="createText"
                class="sections"
            >
                📋 Novo card
            </button>

            <button
                @click="createDocument"
                class="sections"
            >
                📄 Nova lista
            </button>

            <button
                @click="openProjectSettings"
                class="sections"
            >
                ⚙️ Configurações
            </button>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["create-card", "create-text"])

const menuVisible = ref(false);
const menuX = ref(0);
const menuY = ref(0);

const openMenu = (event) => {
    menuX.value = event.clientX;
    menuY.value = event.clientY;
    menuVisible.value = true;
};

const closeMenu = () => {
    menuVisible.value = false;
};

const createCard = () => {
    emit("create-card");
    closeMenu();
};

const createText = () => {
    emit("create-text");
    closeMenu();
};


const createDocument = () => {
    console.log("Criar documento");
    closeMenu();
};

const openProjectSettings = () => {
    console.log("Abrir configurações");
    closeMenu();
};
</script>

<style scoped>
.sections{
    font-size: small;
}
</style>