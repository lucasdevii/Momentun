<script setup>
import DashboardSideBar from '../../components/DashboardSideBar.vue';
import Dashboard from './sections/Dashboard.vue';
import Settings from './sections/Settings.vue';

import { switchSideBarValue, currentSection, Sections } from '../../utils/contexts/sideBar.context.js';

</script>
<template>
    <div class="flex">
        <DashboardSideBar/>
        <Dashboard v-if="currentSection === Sections.DASHBOARD" class="overflow-hidden"/>
        <Settings v-if="currentSection === Sections.SETTINGS" class="overflow-hidden"/>
    </div>
</template>
