import { createApp } from 'vue'
import { defineWebComponents } from 'split-circle'
import App from './App.vue'

defineWebComponents()

const app = createApp(App)

app.mount('#app')
