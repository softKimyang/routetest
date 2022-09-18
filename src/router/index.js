//import * as Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/views/Home.vue'
import About from '../components/views/About.vue'
import NotFound from '../components/NotFound.vue'

//Vue.use(Router)
const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router