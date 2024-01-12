import { createApp } from 'vue'
import App from './App.vue'
import Hotels from './Hotes.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/',
        component: Hotels}
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')