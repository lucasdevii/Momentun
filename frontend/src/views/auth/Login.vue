<template>
    <div class="w-screen h-screen main-container flex">
        <div class="w-2/6">
            <div class="h-full flex flex-col justify-center">
                <div class="w-10/12 mx-auto bg-(--bg-current) rounded-lg">
                    <div class="w-full text-center py-2">
                        <h1 class="text-xl font-bold">Login</h1>
                    </div>
                    <form action="" class="w-full space-y-2 p-3">
                        <label for="">Username</label>
                        <input type="text" maxlength="20">
                        <label for="">Email</label>
                        <input type="text" maxlength="60">
                        <label for="">Password</label>
                        <input type="text" maxlength="20">
                        <label for="">Password confirmation</label>
                        <input type="text" maxlength="20">
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
<script setup></script>