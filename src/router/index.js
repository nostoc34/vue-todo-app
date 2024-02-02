import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TodoList from '../views/TodoList.vue'
import ShopList from '../views/ShopList.vue'
import Reminder from '../views/Reminder.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/todolist',
      name: 'todolist',
      component: TodoList
    },
    {
      path: '/shoplist',
      name: 'shoplist',
      component: ShopList
    },
    {
      path: '/reminders',
      name: 'reminders',
      component: Reminder
    }
  ]
})

export default router
