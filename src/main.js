import Vue from 'vue'
import Vuelidate from 'vuelidate'
import VueRouter from 'vue-router'
import router from './routes'
import App from './App.vue'

Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
