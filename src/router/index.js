import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Tugas1 from '../views/Tugas1.vue';
import Tugas2 from '../views/Tugas2.vue';
// import other tugas views...

const routes = [
  { path: '/', component: Home },
  { path: '/tugas1', component: Tugas1 },
  { path: '/tugas2', component: Tugas2 },
  // add other routes...
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
