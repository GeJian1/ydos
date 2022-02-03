import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { globalRegister } from './plugins/element'

const app = createApp(App)
app.use(globalRegister)
app.use(router).mount('#root')
