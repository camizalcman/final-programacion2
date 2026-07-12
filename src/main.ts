
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/styles.css'

import App from './App.vue'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'


//se crea la aplicacion
const app = createApp(App)

//se agregan funcionalidades
app.use(createPinia())
app.use(router)

//se indica donde renderizar
app.mount('#app')

app.use(MotionPlugin)