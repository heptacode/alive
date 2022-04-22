import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

Vue.use(Vuex);

export interface Article {
  title: string;
  thumbnail: string;
}

export interface Dataset {
  name: string;
  lat: number;
  lng: number;
  protest: {
    집회 참여인원이 클수록 
    사상자

    deaths: {
      today: number;
      total: number;
      
    }
    총 사망자 
    오늘 사망자
    사망자 그래프

    articles?: Article[];
  }
  war: {

    articles?: Article[];
  }
}

interface RootState {
  datasets: Dataset[];
}

const store: StoreOptions<RootState> = {
  state: {
    datasets: [
      {
        name: 'Kyiv city',
        lat: 50.423729,
        lng: 30.514446,
        articles: [
          {
            title: 'test1',
            thumbnail: 'test1',
          },
          {
            title: 'test2',
            thumbnail: 'test2',
          },
          {
            title: 'test3',
            thumbnail: 'test3',
          },
        ],
      },
      {
        name: 'Odessa',
        lat: 46.448736,
        lng: 30.71656,
        articles: [
          {
            title: 'test1',
            thumbnail: 'test1',
          },
          {
            title: 'test2',
            thumbnail: 'test2',
          },
          {
            title: 'test3',
            thumbnail: 'test3',
          },
        ],
      },
      {
        name: 'Berdyansk',
        lat: 46.760374,
        lng: 36.803977,
        articles: [
          {
            title: 'test1',
            thumbnail: 'test1',
          },
          {
            title: 'test2',
            thumbnail: 'test2',
          },
          {
            title: 'test3',
            thumbnail: 'test3',
          },
        ],
      },
      {
        name: 'Lysychansk',
        lat: 48.900567,
        lng: 38.444467,
        articles: [
          {
            title: 'test1',
            thumbnail: 'test1',
          },
          {
            title: 'test2',
            thumbnail: 'test2',
          },
          {
            title: 'test3',
            thumbnail: 'test3',
          },
        ],
      },
      {
        name: 'Ismail Ukraine',
        lat: 45.351738,
        lng: 28.839387,
        articles: [
          {
            title: 'test1',
            thumbnail: 'test1',
          },
          {
            title: 'test2',
            thumbnail: 'test2',
          },
          {
            title: 'test3',
            thumbnail: 'test3',
          },
        ],
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
};

export default new Vuex.Store(store);
