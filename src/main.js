import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import store from './store';

Vue.config.productionTip = false;
Vue.config.keyCodes = {
  numbers: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 8, 13, 46]
}

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
