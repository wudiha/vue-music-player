import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/style.css';
import api from './api';
import naive from 'naive-ui';
import axios from 'axios';

const app = createApp(App).use(router).use(naive);
app.provide('$axios', axios);
app.config.globalProperties.$api = api;

app.mount('#app');
