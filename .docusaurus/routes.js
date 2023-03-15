import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/demos/IcePkgDemo_a77ab2',
    component: ComponentCreator('/demos/IcePkgDemo_a77ab2', 'cd4'),
    exact: true
  },
  {
    path: '/demos/IcePkgDemo_dad9cf',
    component: ComponentCreator('/demos/IcePkgDemo_dad9cf', '25e'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '780'),
    routes: [
      {
        path: '/index',
        component: ComponentCreator('/index', '44b'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/test',
        component: ComponentCreator('/test', '3a8'),
        exact: true,
        sidebar: "defaultSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
