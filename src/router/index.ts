import { createRouter, createWebHistory } from 'vue-router'



export default createRouter({
    // 路由模式的配置
    history: createWebHistory(),
    // 管理路由
    routes: [
        {
            path: '/home',
            component: () => import('@/pages/home/index.vue')
        },
        {
            path: '/hospital',
            component: () => import('@/pages/hospital/index.vue') 
        },
        {
            path: '/',
            redirect: '/home'
        }
    ],
    // 滚动行为, 路由切换回到顶部
    scrollBehavior() {
        return {
            left: 0,
            top: 0
        }
    }
})