import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../src/assets/css/icons.css'
import './assets/main.css'
// 1. Import Ant Design Vue
import Antd from 'ant-design-vue'
import tableData from '@/data/ms-share-data/ShareData'

// 2. Import CSS (Bắt buộc để không bị vỡ giao diện)
import 'ant-design-vue/dist/reset.css'
//  Lưu vào local
localStorage.setItem('tableData', JSON.stringify(tableData))

const app = createApp(App)
app.use(Antd)
app.use(router)

app.mount('#app')
