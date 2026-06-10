<script setup>
import { useRoute } from 'vue-router';
import { onMounted, watch } from 'vue';
import { themeMode } from './utils/contexts/themeMode.context.js';

const route = useRoute();

watch(themeMode, (newTheme, oldTheme) => {
  const html = document.documentElement;
  if (newTheme === 'dark') {
    html.classList.remove('light');
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
    html.classList.add('light');
  }
}, { immediate: true });

</script>

<template>
  <router-view />
</template>