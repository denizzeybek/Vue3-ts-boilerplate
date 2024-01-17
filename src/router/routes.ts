import { ERouteNames } from '@/constants/routeNames';
import type { RouteRecordRaw } from 'vue-router';

// LAYOUTS
import DefaultLayout from '@/layouts/default/Index.vue';

import Home from '@/views/Home.vue';
import StoreExample from '@/views/StoreExample.vue';
import ValidationExample from '@/views/ValidationExample.vue';

const routes: RouteRecordRaw[] = [
  // PROTECTED/DEFAULT ROUTES
  {
    path: '',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        alias: '',
        name: ERouteNames.Home,
        component: Home,
        meta: {
          isLayoutPadding: false,
        },
      },
      {
        path: '/store-example',
        name: ERouteNames.StoreExample,
        component: StoreExample,
        meta: {
          isLayoutPadding: false,
        },
      },
      {
        path: '/validation-example',
        name: ERouteNames.ValidationExample,
        component: ValidationExample,
        meta: {
          isLayoutPadding: false,
        },
      },
    ],
  },
];

export default routes;
