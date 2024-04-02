import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', component: () => import('@/views/login/LoginPage.vue') },
    {
      path: '/', component: () => import('@/views/layout/LayoutContainer.vue'),//重定向
      redirect: '/article/home',
      children:[
        {
          path: '/article/home', component: () => import('@/views/article/MyHome.vue')
        },
        {
          path: '/article/manage', component: () => import('@/views/article/ArticleManagement.vue')
        },
        {
          path: '/article/chart', component: () => import('@/views/article/technologyChart.vue')
        },
        {
          path: '/article/userDefined', component: () => import('@/views/article/userDefined.vue')
        }
        ]
    }
  ]
})
const app = createApp({})
app.use(router)
export default router
