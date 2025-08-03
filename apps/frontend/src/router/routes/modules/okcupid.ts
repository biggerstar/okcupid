import type { RouteRecordRaw } from 'vue-router';


const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'material-symbols:contextual-token-outline-rounded',
      order: 5,
      title: "面板",
      hideChildrenInMenu: true,
      keepAlive: true,
    },
    name: 'platform-junpu',
    path: '/panel',
    component: () => import('#/views/okcupid/index.vue'),
  },
];

export default routes;
