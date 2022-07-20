import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import './assets/font-icons/ecolarium-icons.css'
import VueSimpleAlert from 'vue-simple-alert'

createApp(App).use(VueSimpleAlert).mount('#app')
