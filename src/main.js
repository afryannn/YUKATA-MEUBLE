import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-select/dist/vue-select.css';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';
import VueGlobalVar from 'vue-global-var';
import vSelect from 'vue-select'
import store from './store'
import './assets/main.css'
import './assets/style.css'
import './assets/adminND.css'
//import './assets/admin2.css'
import './assets/style.js'
import vuetify from './plugins/vuetify';

Vue.prototype.$api = "http://localhost:8000/api/";
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.component('v-select', vSelect)
Vue.use(VueToast);

Vue.config.productionTip = false
Vue.use(VueGlobalVar, {
    globals: {
        $api: 'http://127.0.0.1:8000/api/v1/',
        //$api: 'http://192.168.6.223:8000/api/v1/',
    }
});

new Vue({
    router,
    vuetify,
    store,
    render: h => h(App),
}).$mount('#app')