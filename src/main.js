import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/cart';
import StarRating from 'vue-star-rating';

const app = createApp(App)
app.use(store);
app.use(router);
app.mount('#app');
app.component(StarRating);
