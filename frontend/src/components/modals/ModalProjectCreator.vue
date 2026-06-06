<template>
    <div class="absolute w-full h-screen flex justify-center items-center bg-black/30">
        <div class="bg-(--minucious-secondary-color) w-136 p-5 rounded-lg">
            <div class="w-full flex justify-center">
                <h1 class="text-2xl font-bold">Informações do projeto</h1>                
            </div>
            <div class="space-y-4">
                <div>
                    <label for="name" class="font-bold">Nome</label>
                    <input type="text" id="name" value="New Project">
                </div>
                <div>
                    <label for="textArea" class="font-bold">Descrição</label>
                    <textarea rows="5" cols="2" id="textArea" class="bg-(--minucious-secondary-color) border-2 border-(--minucious-primary-color) w-full"></textarea>
                </div>
            </div>
            <div>
                <button type="">Criar</button>
            </div>
        </div>
    </div>
</template>
<script setup>
</script>