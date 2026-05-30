import { createRouter, createWebHistory } from "vue-router"

import Login from "../views/auth/Login.vue"
import Register from "../views/auth/Register.vue"

const routes = [
    {
        path: "/login",
        name: "login",
        component: Login
    },
    {
        path: "/register",
        name: "register",
        component: Register
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router