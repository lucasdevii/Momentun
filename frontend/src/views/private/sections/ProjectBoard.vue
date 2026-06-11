<template>
    <div class="h-screen w-full bg-(--minucious-primary-color) relative" @contextmenu.prevent="openContextMenu">
        <BoardRender /> 
    </div>    
</template>
<script setup>
import BoardRender from '../../../components/project/BoarderRender.vue';
</script>