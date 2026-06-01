<script>
import { isExpanded, switchSideBarValue } from '../utils/contexts/sideBar.context.js'
</script>
<template>
    <div :class="isExpanded ? 'w-10' : 'w-28'" >
        <div>
            <div>🏠 Dashboard</div>
            <div>📋 Meus Projetos</div>
            <div>🏆 Conquistas</div>
            <div>📊 Estatísticas</div>
            <div>👤 Perfil</div>
            <div>⚙️ Configurações</div>
        </div>
    </div>
</template>
