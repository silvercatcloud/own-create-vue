import { createApp } from 'vue'
import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
import * as echarts from 'echarts'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
app.use(createPinia().use(persist))
// 全局挂载 echarts
app.config.globalProperties.$echarts = echarts
