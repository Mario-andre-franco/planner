import { createRouter, createWebHistory } from 'vue-router'
import TelaPlanner from '../views/TelaPlanner.vue'

const routes = [
  
    {
        path: '/',
        name: 'TelaPlanner',
        component: TelaPlanner
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router