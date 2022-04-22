import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Trending from '@/views/Trending.vue';
import News from '@/views/News.vue';
import War from '@/views/War.vue';
import Protest from '@/views/Protest.vue';

import { mdiFlag, mdiTank, mdiTrendingUp, mdiNewspaperVariantOutline } from '@mdi/js';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Trending 🔥',
    component: Trending,
    meta: { icon: mdiTrendingUp },
  },
  {
    path: '/news',
    name: 'News',
    component: News,
    meta: { icon: mdiNewspaperVariantOutline },
  },
  {
    path: '/war',
    name: 'War',
    component: War,
    meta: { icon: mdiTank },
  },
  {
    path: '/protest',
    name: 'Protest',
    component: Protest,
    meta: { icon: mdiFlag },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
