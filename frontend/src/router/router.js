import { createRouter, createWebHistory } from "vue-router"

import Login from "../views/auth/Login.vue"
import Register from "../views/auth/Register.vue"
import Home from "../views/private/Home.vue"
import Project from "../views/private/Project.vue"

const routes = [
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/register",
        name: "register",
        component: Register,
    },
    {
        path: "/project/:id",
        name: "project",
        component: Project,
    },
    {
        path: "/",
        name: "home",
        component: Home,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router