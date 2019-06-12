import Vue from 'vue';
import App from './App.vue';
// animate on scroll
import AOS from 'aos';
import 'aos/dist/aos.css';
// vue router
import VueRouter from 'vue-router';
import { routes } from './routes/routes.js';

var VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo, {
  duration: 750,
  easing: "ease",
})

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes,
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  created() {
    AOS.init()
  },
}).$mount('#app')
