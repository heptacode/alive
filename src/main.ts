import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import x5GMaps from 'x5-gmaps';

Vue.config.productionTip = false;

Vue.use(x5GMaps, {
  key: import.meta.env.NODE_ENV !== 'production' ? import.meta.env.VITE_APP_LOCAL_GOOGLE_KEY : 'AIzaSyBBGdySgTvDkEKMZaM5udB_rGP4jct-w60',
  libraries: ['visualization'],
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
