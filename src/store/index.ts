import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

Vue.use(Vuex);

interface RootState {
  tab: number;
}

const store: StoreOptions<RootState> = {
  state: {
    tab: -1,
  },
  mutations: {},
  actions: {},
  modules: {},
};

export default new Vuex.Store(store);
