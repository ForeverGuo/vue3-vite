import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/css/public.css'
import './assets/css/reset.css'
import router from './router/router'
import store from '@/store/store'
import * as ElIcons from '@element-plus/icons'

const app = createApp(App);

for (const name in ElIcons) {
	app.component(name,ElIcons[name])
}

app.use(store)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
