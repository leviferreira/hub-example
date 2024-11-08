import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { latestBackportsPlugin, LatestBackportsPage } from '../src/plugin';

createDevApp()
  .registerPlugin(latestBackportsPlugin)
  .addPage({
    element: <LatestBackportsPage />,
    title: 'Root Page',
    path: '/latest-backports',
  })
  .render();
