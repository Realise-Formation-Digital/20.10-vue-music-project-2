import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/Home.vue';
import About from '@/components/About.vue';
import HotTracks from '@/components/HotTracks.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/hottracks',
    name: 'HotTracks',
    component: HotTracks,
  },
  
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;