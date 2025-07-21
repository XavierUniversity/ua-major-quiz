import { createApp,markRaw } from 'vue'
import App from './App.vue'
import { registerPlugins } from './plugins';
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia();

registerPlugins(app);

app.use(pinia).mount('#app')