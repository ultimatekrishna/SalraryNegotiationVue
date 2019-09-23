import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Vuelidate from 'vuelidate';
import axios from 'axios'


Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(Vuelidate);
Vue.prototype.$axios = axios;
new Vue({
  render: h => h(App),
}).$mount('#app')


