import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { spiderpigPlugin, SpiderpigPage } from '../src/plugin';

createDevApp()
  .registerPlugin(spiderpigPlugin)
  .addPage({
    element: <SpiderpigPage />,
    title: 'Root Page',
    path: '/spiderpig',
  })
  .render();
