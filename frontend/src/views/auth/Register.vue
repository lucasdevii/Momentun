<template>
    <div class="w-screen h-screen main-container flex">
        <div class="w-2/6">
            <div class="h-full flex flex-col justify-center">
                <div class="w-10/12 mx-auto bg-(--bg-current) rounded-lg">
                    <div class="w-full text-center py-2">
                        <h1 class="text-xl font-bold">Register</h1>
                    </div>
                    <div class="w-full space-y-2 p-3">
                        <div>
                            <label for="name">Username</label>
                            <input v-model="username" type="text" maxlength="20" id="name">
                            <label for="email">Email</label>
                            <input v-model="email" type="email" maxlength="60" id="email">
                            <label for="password">Password</label>
                            <input v-model="password" type="password" maxlength="50" id="password">
                            <label for="passwordConfirm">Password confirmation</label>
                            <input v-model="passwordConfirm" type="password" maxlength="50" id="passwordConfirm">
                        </div>
                        <div class="w-full flex justify-end">
                            <button @click="submit()">asdsa</button>
                        </div>
                    </div>
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
import { register } from "../../services/auth.services"

const username = ref('')
const email = ref('')
const password = ref('')
const passwordConfirm = ref('')

const submit = async () => {
    const userData = {
        username: username.value,
        email: email.value,
        password: password.value,
        passwordConfirm: passwordConfirm.value
    }
    const response = await register(userData);
    console.log(response)
    if(!response.success){
        console.log("erro: ", response.error);
    }
}

</script>