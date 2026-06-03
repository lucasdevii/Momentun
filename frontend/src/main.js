import { createApp } from 'vue'
import './assets/style.css'
import './assets/form.css'

import router from './router/router.js'
import App from './App.vue'
import { loadUser } from './utils/contexts/user.context.js'

await loadUser()

createApp(App).use(router).mount('#app')
