import { createApp,markRaw } from 'vue'
import App from './App.vue'
import router from './router'
import { registerPlugins } from './plugins';
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia();
pinia.use(({ store }) => {
  store.$router = markRaw(router);
});

registerPlugins(app);

app.use(pinia).use(router).mount('#app')