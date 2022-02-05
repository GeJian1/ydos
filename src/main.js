import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { globalRegister } from './plugins/element'
import GlobalValue from './core/global'

globals.app = new GlobalValue()
const app = createApp(App)
app.use(globalRegister)
app.use(router).mount('#root')
