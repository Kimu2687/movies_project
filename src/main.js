import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "@/assets/global_styles.css"
import "@/assets/card.css"
import "@/assets/font-awesome-4.7.0/font-awesome/css/font-awesome.css"







createApp(App).use(router).mount('#app')
