import type { RouteRecordRaw } from 'vue-router';


const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'material-symbols:contextual-token-outline-rounded',
      order: 5,
      title: "军埔",
      hideChildrenInMenu: true,
      keepAlive: true,
    },
    name: 'platform-junpu',
    path: '/junpu',
    component: () => import('#/views/junpu/index.vue'),
  },
];

export default routes;
