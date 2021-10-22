import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import less from 'less'

createApp(App).use(ElementPlus).use(less).mount('#app')
