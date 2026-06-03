<script setup>
import { switchThemeMode } from '../../../utils/contexts/themeMode.context';

</script>
<template>
    <div>
        <p class="cursor-pointer" @click="switchThemeMode">CHANGE MODE</p>
    </div>
</template>