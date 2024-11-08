import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const spiderpigPlugin = createPlugin({
  id: 'spiderpig',
  routes: {
    root: rootRouteRef,
  },
});

export const SpiderpigPage = spiderpigPlugin.provide(
  createRoutableExtension({
    name: 'SpiderpigPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
