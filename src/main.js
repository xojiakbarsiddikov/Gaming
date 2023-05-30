import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from "./router/index.js";
import './style.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(AOS)
app.mount('#app');
