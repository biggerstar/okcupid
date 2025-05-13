import type { RouteRecordRaw } from 'vue-router';


const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'material-symbols:contextual-token-outline-rounded',
      order: 5,
      title: "分析",
      hideChildrenInMenu: true,
      keepAlive: true,
    },
    name: 'Analysis',
    path: '/analysis',
    component: () => import('#/views/analysis/index.vue'),
  },
];

export default routes;
