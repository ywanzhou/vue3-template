import { createApp } from 'vue'
import App from './App.vue'
// 引入 vue-router
import router from './router'
// 引入 vuex
import store from './store'
import './assets/css/index.css'
import 'animate.css'

createApp(App).use(router).use(store).mount('#app')
