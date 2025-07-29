import type { RouteRecordRaw } from 'vue-router';


const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'mdi:user-online-outline',
      order: 8,
      title: "52电商",
      hideChildrenInMenu: true,
      keepAlive: true,
    },
    name: 'platform-52-dianshang',
    path: '/52-dianshang',
    // @ts-ignore
    component: () => import('#/views/52-dianshang/index.vue')
  },
];

export default routes;
