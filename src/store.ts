import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

Vue.use(Vuex);

interface RootState {}

const store: StoreOptions<RootState> = {
  state: {},
  mutations: {},
  actions: {},
  modules: {},
};

export default new Vuex.Store(store);
