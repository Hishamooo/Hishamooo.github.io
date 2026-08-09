import Vue from 'vue'
import App from './App.vue'

import AOS from 'aos'
import 'aos/dist/aos.css'
import VueScrollTo from 'vue-scrollto'
import VueRouter from 'vue-router'
import VTooltip from 'v-tooltip'

var VueCookie = require('vue-cookie');

Vue.use(VTooltip)
Vue.use(VueRouter)
Vue.use(VueScrollTo)
Vue.use(VueCookie);

Vue.config.productionTip = false

const ProjectDetail = () => import('./components/ProjectDetail.vue')

const routes = [
  { path: '/', name: 'home' },
  { path: '/projects/:slug', name: 'project', component: ProjectDetail },
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { selector: to.hash }
    return { x: 0, y: 0 }
  },
  routes
})

// GitHub Pages SPA redirect: restore path from ?p= query param
router.beforeEach((to, from, next) => {
  if (to.query.p) {
    const path = '/' + decodeURIComponent(to.query.p)
    next({ path, replace: true })
  } else {
    next()
  }
})

new Vue({
  created () {
    AOS.init({
      once: true,
      duration: 500,
      easing: 'ease-out',
      offset: 80
    })
  },
  router,
  render: h => h(App),
}).$mount('#app')
