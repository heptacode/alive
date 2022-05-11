import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import { mdiFlag, mdiTank, mdiTrendingUp, mdiNewspaperVariantOutline } from '@mdi/js';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Trending 🔥',
    component: () => import('@/views/Trending.vue'),
    meta: { icon: mdiTrendingUp },
  },
  {
    path: '/articles',
    name: 'Articles',
    component: () => import('@/views/Articles.vue'),
    meta: { icon: mdiNewspaperVariantOutline },
  },
  {
    path: '/war',
    name: 'War',
    component: () => import('@/views/War.vue'),
    meta: { icon: mdiTank },
  },
  {
    path: '/protest',
    name: 'Protest',
    component: () => import('@/views/Protest.vue'),
    meta: { icon: mdiFlag },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
