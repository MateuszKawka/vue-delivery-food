import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import '../src/assets/scss/main.scss'
import 'vue-material-design-icons/styles.css'
import 'vue2-animate/dist/vue2-animate.min.css'
Vue.use(Buefy);
import i18n from './i18n'

import vueSmoothScroll from 'vue2-smooth-scroll'
Vue.use(vueSmoothScroll);

import VueScrollReveal from 'vue-scroll-reveal';
Vue.use(VueScrollReveal);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');

