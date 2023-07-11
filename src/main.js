import { createApp } from 'vue'
import App from './App.vue'
import store from '../store/store'

// new Vue({
//     store: store,
//     render: h => h(App),
// }).$mount('#app')

const app = createApp(App);

app.use(store);

app.mount('#app');