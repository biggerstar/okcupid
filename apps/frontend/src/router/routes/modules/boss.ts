import type { RouteRecordRaw } from 'vue-router';


const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'mdi:user-online-outline',
      order: 8,
      title: "老板",
      hideChildrenInMenu: true,
      keepAlive: true,
    },
    name: 'Boss',
    path: '/boss',
    component: () => import('#/views/boss/index.vue'),
  },
];

export default routes;
