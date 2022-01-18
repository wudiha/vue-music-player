import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/style.css';
import api from './api';

const app = createApp(App).use(router);
app.config.globalProperties.$api = api;
app.mount('#app');
