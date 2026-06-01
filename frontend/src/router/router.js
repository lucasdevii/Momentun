import { createRouter, createWebHistory } from "vue-router"

import Login from "../views/auth/Login.vue"
import Register from "../views/auth/Register.vue"
import Home from "../views/private/Home.vue"

const routes = [
    {
        path: "/login",
        name: "login",
        component: Login,
        meta: {showSideBar: false}
    },
    {
        path: "/register",
        name: "register",
        component: Register,
        meta: {showSideBar: false}
    },{
        path: "/",
        name: "home",
        component: Home,
        meta: {showSideBar: true}
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router