import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import x5GMaps from 'x5-gmaps';
import { registerSW } from 'virtual:pwa-register';

Vue.config.productionTip = false;

Vue.use(x5GMaps, {
  key: 'AIzaSyBBGdySgTvDkEKMZaM5udB_rGP4jct-w60',
  libraries: ['visualization'],
});

const updateSW = registerSW({
  onNeedRefresh() {},
  onOfflineReady() {},
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
