<script>
import { useRouter } from 'vue-router';
import SideBar from './components/sideBar.vue';

const router = useRouter()
</script>
<template>
  <div>
    <SideBar v-if="router.meta.showSideBar"/>
    <router-view />
  </div>
</template>