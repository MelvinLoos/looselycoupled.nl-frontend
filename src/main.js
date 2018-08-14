import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import Default from './Pages/Default.vue'
import {HTTP} from './http-common.js';
import VueProgressiveImage from 'vue-progressive-image'

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(VueProgressiveImage)

var errors = []
var routes = []

HTTP.get('collections/get/pages')
.then(response => {
  const pages = response.data.entries
  for (var i = 0; i < pages.length; i++) {
    var page = pages[i]
    routes.push({
      path: page.url,
      component: Default,
      props: { page: page },
      title: page.title
    })
  }
})
.catch(e => {
  errors.push(e)
})

const router = new VueRouter({
  routes // short for `routes: routes`
})

const app = new Vue({
  router: router,
  el: '#app',
  render: h => h(App),
  data: {
    errors: errors
  }
})
