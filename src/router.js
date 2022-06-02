import { createWebHistory, createRouter } from "vue-router";
import sub_page from './components/sub_page.vue';

const routes = [
  {
    path: "/sub/:id",
    component: sub_page,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 