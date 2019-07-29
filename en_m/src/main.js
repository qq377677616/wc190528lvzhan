import Vue from 'vue'
import App from './App.vue'

import router from './router'
import {container,Icon,Header,Main} from 'element-ui';
import './views/default'
// import 'element-ui/lib/theme-chalk/index.css';

import './static/js/remAdaptation'
import './assets/font/helvetivattf.css'

import animated from 'animate.css'
import VueParticles from 'vue-particles'
Vue.use(VueParticles);

Vue.config.productionTip = false;
Vue.use(animated);

Vue.use(container);
Vue.use(Main);
Vue.use(Header);
Vue.use(Icon);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

