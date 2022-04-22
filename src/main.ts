import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import VueGoogleMaps from '@fawmi/vue-google-maps';

Vue.config.productionTip = false;

const app = createApp(App);
app
  .use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyA8B4NiXqE0c_Y6aDfQmOweb_5ufeGp1BY',
    },
  })
  .mount('#app');

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyA8B4NiXqE0c_Y6aDfQmOweb_5ufeGp1BY',
  },
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
