// vue3框架提供的方法createApp,用来创建应用实例方法
import { createApp } from 'vue'


// 引入清除默认样式
import '@/style/reset.scss'

// 引入国际化
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'


const app = createApp(App)

// 引入头部,底部 全局组件
import HospitalBottom from '@/components/hospitalBottom/index.vue'
import HospitalTop from '@/components/hospitalTop/index.vue'
// 引入路由并且安装
import router from '@/router'
// elementPlus引入并且注册
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus, {
    locale: zhCn,
  })
app.use(router)
// app.component{ 'HospitalBottom', HospitalBottom };
app.component('HospitalTop', HospitalTop)
app.component('HospitalBottom', HospitalBottom)

// 引入根组件App
import App from './App.vue'
// 创建应用实例并挂载
app.mount('#app')
