import type { RouteRecordRaw } from 'vue-router';


const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'lucide:layout-dashboard',
      order: 1,
      title: "面板",
      hideChildrenInMenu: true,
      keepAlive: true,
    },
    name: 'BasePanel',
    path: '/panel',
    component: () => import('#/views/panel/index.vue'),
  },
];

export default routes;
