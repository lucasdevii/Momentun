<script setup>
import SideBar from '../../components/SideBar.vue';
import Dashboard from './sections/Dashboard.vue';
import Settings from './sections/Settings.vue';

import { switchSideBarValue, currentSection, Sections } from '../../utils/contexts/sideBar.context.js';

</script>
<template>
    <div class="flex">
        <SideBar/>
        <Dashboard v-if="currentSection === Sections.DASHBOARD"/>
        <Settings v-if="currentSection === Sections.SETTINGS"/>
    </div>
</template>
