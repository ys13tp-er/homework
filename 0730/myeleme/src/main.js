import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'
// Vue继承axios
Vue.prototype.$axios = axios;

import {
  Search
} from 'vant';
Vue.use(Search);

import {
  Swipe,
  SwipeItem
} from 'vant';
Vue.use(Swipe).use(SwipeItem);

import {
  Grid,
  GridItem
} from 'vant';
Vue.use(Grid).use(GridItem);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')