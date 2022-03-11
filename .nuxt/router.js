import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _631db7bd = () => interopDefault(import('../pages/Icons.vue' /* webpackChunkName: "pages/Icons" */))
const _0e918d78 = () => interopDefault(import('../pages/Maps.vue' /* webpackChunkName: "pages/Maps" */))
const _59fe278b = () => interopDefault(import('../pages/Notifications.vue' /* webpackChunkName: "pages/Notifications" */))
const _8b6ab1ec = () => interopDefault(import('../pages/table-list.vue' /* webpackChunkName: "pages/table-list" */))
const _1cfabc5e = () => interopDefault(import('../pages/tpgrade.vue' /* webpackChunkName: "pages/tpgrade" */))
const _65384fc8 = () => interopDefault(import('../pages/Typography.vue' /* webpackChunkName: "pages/Typography" */))
const _1aa2df34 = () => interopDefault(import('../pages/user-profile.vue' /* webpackChunkName: "pages/user-profile" */))
const _0d5ed195 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Icons",
    component: _631db7bd,
    name: "Icons"
  }, {
    path: "/Maps",
    component: _0e918d78,
    name: "Maps"
  }, {
    path: "/Notifications",
    component: _59fe278b,
    name: "Notifications"
  }, {
    path: "/table-list",
    component: _8b6ab1ec,
    name: "table-list"
  }, {
    path: "/tpgrade",
    component: _1cfabc5e,
    name: "tpgrade"
  }, {
    path: "/Typography",
    component: _65384fc8,
    name: "Typography"
  }, {
    path: "/user-profile",
    component: _1aa2df34,
    name: "user-profile"
  }, {
    path: "/",
    component: _0d5ed195,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
