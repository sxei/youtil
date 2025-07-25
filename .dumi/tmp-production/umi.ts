// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import './core/polyfill';
import { getPluginManager as getDumiPluginManager } from './core/plugin';
import { setPluginManager as setDumiPluginManager } from '/Users/liuxianan1/workspace/youtil/node_modules/dumi/dist/client/theme-api/utils.js';
import { renderClient } from '/Users/liuxianan1/workspace/youtil/node_modules/@umijs/renderer-react';
import { getRoutes } from './core/route';
import { createPluginManager } from './core/plugin';
import { createHistory } from './core/history';
import Loading from '@@/dumi/theme/loading';
import { ApplyPluginsType } from 'umi';


const publicPath = "/";
const runtimePublicPath = false;

async function render() {
  const pluginManager = createPluginManager();
  const { routes, routeComponents } = await getRoutes(pluginManager);

  // allow user to extend routes
  await pluginManager.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: {
      routes,
      routeComponents,
    },
  });

  const contextOpts = pluginManager.applyPlugins({
    key: 'modifyContextOpts',
    type: ApplyPluginsType.modify,
    initialValue: {},
  });

  const basename = contextOpts.basename || '/';
  const historyType = contextOpts.historyType || 'browser';

  const history = createHistory({
    type: historyType,
    basename,
    ...contextOpts.historyOpts,
  });

  return (pluginManager.applyPlugins({
    key: 'render',
    type: ApplyPluginsType.compose,
    initialValue() {
      const context = {
        useStream: true,
        routes,
        routeComponents,
        pluginManager,
        mountElementId: 'root',
        rootElement: contextOpts.rootElement || document.getElementById('root'),
        loadingComponent: Loading,
        publicPath,
        runtimePublicPath,
        history,
        historyType,
        basename,
        __INTERNAL_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {"pureApp":false,"pureHtml":false},
        callback: contextOpts.callback,
      };
      const modifiedContext = pluginManager.applyPlugins({
        key: 'modifyClientRenderOpts',
        type: ApplyPluginsType.modify,
        initialValue: context,
      });
      return renderClient(modifiedContext);
    },
  }))();
}


// always remove trailing slash from location.pathname
if (
  typeof history !== 'undefined' &&
  location.pathname.length > 1 &&
  location.pathname.endsWith('/')
) {
  history.replaceState(
    {},
    '',
    location.pathname.slice(0, -1) + location.search + location.hash,
  );
}

(function () {
  var cache = typeof navigator !== 'undefined' && navigator.cookieEnabled && typeof window.localStorage !== 'undefined' && localStorage.getItem('dumi:prefers-color') || 'light';
  var isDark = typeof window !== 'undefined' &&  window.matchMedia('(prefers-color-scheme: dark)').matches;
  var enums = ['light', 'dark', 'auto'];

  typeof document !== 'undefined' && document.documentElement.setAttribute(
    'data-prefers-color',
    cache === enums[2]
      ? (isDark ? enums[1] : enums[0])
      : (enums.indexOf(cache) > -1 ? cache : enums[0])
  );
})();
render();

    if (typeof window !== 'undefined') {
      window.g_umi = {
        version: '4.4.11',
      };
    }
    
setDumiPluginManager(getDumiPluginManager());
