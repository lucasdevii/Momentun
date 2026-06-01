import { createApp } from 'vue'
import './assets/style.css'
import './assets/form.css'

import router from './router/router.js'
import App from './App.vue'

createApp(App).use(router).mount('#app')
