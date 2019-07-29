import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import Element from 'element-ui';
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './comm/default.js';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/js/remAdaptation';
import 'swiper/dist/css/swiper.css';
import './assets/animated.css'

import VueParticles from 'vue-particles'
Vue.use(VueParticles);
Vue.config.productionTip = false;
Vue.use(VueAxios, axios)
Vue.use(Element);
Vue.use(VueAwesomeSwiper);
// Vue.use(animate);
// Vue.use(Main);
// Vue.use(Header);
// Vue.use(Icon);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
