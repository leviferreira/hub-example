import {
  createApiFactory,
  createPlugin,
  createRoutableExtension,
  discoveryApiRef,
  fetchApiRef,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';
import { SalApi, salApiRef } from './api';

export const latestBackportsPlugin = createPlugin({
  id: 'latest-backports',
  routes: {
    root: rootRouteRef,
  },
  apis: [
    createApiFactory({
      api: salApiRef,
      deps: {discoveryApi: discoveryApiRef, fetchApi: fetchApiRef},
      factory: ({discoveryApi, fetchApi}) => new SalApi({discoveryApi, fetchApi}),
    })
  ]
});

export const LatestBackportsPage = latestBackportsPlugin.provide(
  createRoutableExtension({
    name: 'LatestBackportsPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
