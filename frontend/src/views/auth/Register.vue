<template>
    <div class="w-screen h-screen main-container flex">
        <div class="w-2/6">
            <div class="h-full flex flex-col justify-center">
                <div class="w-10/12 mx-auto bg-(--bg-current) rounded-lg">
                    <div class="w-full text-center py-2">
                        <h1 class="text-xl font-bold">Login</h1>
                    </div>
                    <form action="" class="w-full space-y-2 p-3">
                        <label for="name">Username</label>
                        <input type="text" maxlength="20" id="name">
                        <label for="email">Email</label>
                        <input type="text" maxlength="60" id="email">
                        <label for="password">Password</label>
                        <input type="text" maxlength="20" id="password">
                        <label for="passwordConfirm">Password confirmation</label>
                        <input type="text" maxlength="20" id="passwordConfirm">
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

const username = ref('')
const email = ref('')
const password = ref('')
const passwordConfirm = ref('')

const submit = () => {
        
}

</script>