<template>
    <div class="w-screen h-screen main-container flex">
        <div class="w-2/6">
            <div class="h-full flex flex-col justify-center">
                <div class="w-10/12 mx-auto bg-(--bg-current) rounded-lg">
                    <div class="w-full text-center py-2">
                        <h1 class="text-xl font-bold">Login</h1>
                    </div>
                    <form class="w-full space-y-2 p-3" @submit.prevent="submit">
                        <div>
                            <label for="email">Email</label>
                            <input id="email" v-model="email" type="email" maxlength="60">
                            <span class="text-red-500 h-5">{{ errorMsg }}</span>
                        </div>
                        <div>
                            <label for="password">Password</label>
                            <input id="password" v-model="password" type="password" maxlength="60">
                        </div>
                        <div class="w-full flex justify-end">
                            <button class="button-primary" type="submit">Entrar</button>
                        </div>
                    </form>
                </div>
                <div class="w-10/12 mx-auto bg-(--bg-current) rounded-lg mt-4">
                    OPÇÕES
                </div>
            </div>
        </div>
        <div class="w-4/6 bg-(--bg-secondary)"></div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { login } from '../../services/auth.services.js'
import Cookie from 'js-cookie'

const router = useRouter()
const email = ref('')
const password = ref('')
const errorMsg = ref('')

const submit = async () => {
    errorMsg.value = ''
    if (!email.value || !password.value) {
        errorMsg.value = 'Email e senha são obrigatórios.'
        return
    }

    const response = await login({ email: email.value, password: password.value })
    if (!response.success) {
        errorMsg.value = 'Falha ao autenticar.'
        return
    }

    const token = response.data.token
    Cookie.set('token', token)

    router.push('/')
}
</script>