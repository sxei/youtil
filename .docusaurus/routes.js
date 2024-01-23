import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/demos/IcePkgDemo_docs_02_test_0',
    component: ComponentCreator('/demos/IcePkgDemo_docs_02_test_0', '59a'),
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
