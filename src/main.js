import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './assets/main.css'

import App from './App.vue'
import router from './router'
import CommonModal from '@/components/CommonModal.vue'
import CommonSelect from '@/components/CommonSelect.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('CM', CommonModal).component('CS', CommonSelect)

app.mount('#app')
