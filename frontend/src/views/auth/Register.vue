<template>
    <div class="w-screen h-screen main-container flex">
        <div class="w-2/6">
            <div class="h-full flex flex-col justify-center">
                <div class="w-10/12 mx-auto bg-(--bg-current) rounded-lg">
                    <div class="w-full text-center py-2">
                        <h1 class="text-xl font-bold">Register</h1>
                    </div>
                    <form class="w-full space-y-2 p-3" @submit.prevent="submit">
                        <div class="space-y-2">
                            <div>
                                <label for="name">Username</label>
                                <input v-model="username" type="text" maxlength="20" id="name">
                                <span class="text-red-500 h-5">{{ errors.username?.[0] || '' }}</span>
                            </div>
                            <div>
                                <label for="email">Email</label>
                                <input v-model="email" type="email" maxlength="60" id="email">
                                <span class="text-red-500 h-5">{{ errors.email?.[0] || '' }}</span>
                            </div>
                            <div>
                                <label for="password">Password</label>
                                <input v-model="password" type="password" maxlength="20" id="password">
                                <span class="text-red-500 h-5">{{ errors.password?.[0] ||'' }}</span>
                            </div>
                            <div>
                                <label for="passwordConfirm">Password confirmation</label>
                                <input v-model="passwordConfirm" type="password" maxlength="20" id="passwordConfirm">
                                <span class="text-red-500 h-5">{{ errors.passwordConfirm?.[0] }}</span>
                            </div>
                        </div>
                        <div class="w-full flex justify-end">
                            <button class="button-primary" type="submit">Enviar</button>
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
import { ref } from "vue"
import { registerValidate } from "../../validators/auth.validate.js"
import { register } from "../../services/auth.services.js"
import { useRouter } from 'vue-router'
const username = ref('')
const email = ref('')
const password = ref('')
const passwordConfirm = ref('')
const errors = ref({
    email: [],
    username: [],
    password: [],
    passwordConfirm: [],
    all: []
})
const router = useRouter()

const submit = async () => {
    const userData = {
        username: username.value,
        email: email.value,
        password: password.value,
        passwordConfirm: passwordConfirm.value
    }
    
    errors.value = registerValidate(userData)

    if(errors.value.all.length || errors.value.username.length || errors.value.email.length || errors.value.password.length || errors.value.passwordConfirm.length){
        return 
    }
    
    const response = await register(userData);

    if(!response.success){     
        // TODO: map backend errors into `errors` to show them
        return
    }

    // on success, go to login
    router.push('/login')
}

</script>