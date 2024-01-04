import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

app.component('CompA',window.CompA)
app.component('CompB',window.CompB)
app.mount('#app')

window.instance = app;
