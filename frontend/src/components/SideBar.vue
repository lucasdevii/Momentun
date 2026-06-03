<script setup>
import { isExpanded, switchSideBarValue } from '../utils/contexts/sideBar.context.js'
import { user } from '../utils/contexts/user.context.js';

</script>
<template>
    <div 
        :class="isExpanded ? 'w-24' : 'w-48'" 
        class="border-r border-(--destac-color) h-screen p-3 flex flex-col justify-between relative"     
    >
        <div class="absolute -right-3 cursor-pointer bg-(--destac-color) rounded-full p-1 duration-200 hover:scale-110" @click="switchSideBarValue">
            {{ isExpanded ? '➡️' : '⬅️' }}
        </div>
        <div class="flex-1">
            <div class="h-[10vh] w-full flex items-center justify-center border-b border-(--destac-color)">
                <div>{{ user?.username || 'Guest' }}</div>
            </div>
            <div class="w-full  text-lg">
                <div>
                    <span>🏠</span>
                    <span>Dashboard</span>
                </div>
                <div>
                    <span>📋</span>
                    <span>Meus Projetos</span>
                </div>
                <div>
                    <span>🏆</span>
                    <span>Conquistas</span>
                </div>
                <div>
                    <span>📊</span>
                    <span>Estatísticas</span>
                </div>
                <div>
                    <span>👤</span>
                    <span>Perfil</span>
                </div>
                <div>
                    <span>⚙️</span>
                    <span>Configurações</span>
                </div>
            </div>
        </div>
    </div>
</template>
