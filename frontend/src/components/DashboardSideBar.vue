<script setup>
import { isExpanded, switchSideBarValue, setCurrentSection, Sections } from '../utils/contexts/sideBar.context.js'
import { user } from '../utils/contexts/user.context.js';


</script>
<template>
    <nav 
        :class="isExpanded ? 'w-min' : 'w-48'" 
        class="border-r border-(--destac-color) h-screen p-3 flex flex-col justify-between relative z-50"     
    >
        <div class="absolute -right-3 cursor-pointer bg-(--destac-color) rounded-full p-1 duration-200 hover:scale-110" @click="switchSideBarValue">
            {{ isExpanded ? '➡️' : '⬅️' }}
        </div>
        <div class="flex-1">
            <div class="h-[8vh] w-full flex items-center justify-center border-b border-(--destac-color)">
                <div>{{ isExpanded ? user?.username?.[0] : user?.username || 'Guest' }}</div>
            </div>
            <div class="w-full text-lg space-y-2 mt-4">
                <div class="cursor-pointer" @click="setCurrentSection(Sections.DASHBOARD)">
                    <span>🏠</span>
                    <span v-if="!isExpanded">Dashboard</span>
                </div>
                <div class="cursor-pointer" @click="setCurrentSection(Sections.PROJECTS)">
                    <span>📋</span>
                    <span v-if="!isExpanded">Meus Projetos</span>
                </div>
                <div class="cursor-pointer" @click="setCurrentSection(Sections.ACHIEVEMENTS)">
                    <span>🏆</span>
                    <span v-if="!isExpanded">Conquistas</span>
                </div>
                <div class="cursor-pointer" @click="setCurrentSection(Sections.STATISTICS)">
                    <span>📊</span>
                    <span v-if="!isExpanded">Estatísticas</span>
                </div>
                <div class="cursor-pointer" @click="setCurrentSection(Sections.PROFILE)">
                    <span>👤</span>
                    <span v-if="!isExpanded">Perfil</span>
                </div>
                <div class="cursor-pointer" @click="setCurrentSection(Sections.SETTINGS)">
                    <span>⚙️</span>
                    <span v-if="!isExpanded">Configurações</span>
                </div>
            </div>
        </div>
    </nav>
</template>
