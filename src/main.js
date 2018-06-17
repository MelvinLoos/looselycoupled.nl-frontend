import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import Home from './Pages/Home.vue'

Vue.use(BootstrapVue)
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

const app = new Vue({
  router: router,
  el: '#app',
  render: h => h(App)
}).$mount('#app')
