<script setup>
import { useRoute } from 'vue-router';
import SideBar from './components/SideBar.vue';

const route = useRoute();
</script>

<template>
  <SideBar v-if="route.meta.showSideBar" />
  <router-view />
</template>