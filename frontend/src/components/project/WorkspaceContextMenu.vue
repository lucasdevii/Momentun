<template>
    <div
        v-if="menuVisible"
        class="fixed w-44 h-60 bg-(--bg-main) rounded-lg shadow-lg p-2 z-50 flex flex-col space-y-1"
        :style="{
            left: `${menuX}px`,
            top: `${menuY}px`
        }"
    >
        <button @click="emitCreateCard" class="sections">➕ Nova tarefa</button>
        <button @click="emitCreateText" class="sections">📋 Novo card</button>
        <button @click="emitCreateDocument" class="sections">📄 Nova lista</button>
        <button @click="emitOpenProjectSettings" class="sections">⚙️ Configurações</button>
    </div>
</template>

<script setup>
const props = defineProps({
    menuVisible: {
        type: Boolean,
        default: false,
    },
    menuX: {
        type: Number,
        default: 0,
    },
    menuY: {
        type: Number,
        default: 0,
    },
});

const emit = defineEmits([
    "create-card",
    "create-text",
    "create-document",
    "open-project-settings",
    "close-menu",
]);

const emitCreateCard = () => {
    emit("create-card");
    emit("close-menu");
};

const emitCreateText = () => {
    emit("create-text");
    emit("close-menu");
};

const emitCreateDocument = () => {
    emit("create-document");
    emit("close-menu");
};

const emitOpenProjectSettings = () => {
    emit("open-project-settings");
    emit("close-menu");
};
</script>

<style scoped>
.sections{
    font-size: small;
}
</style>