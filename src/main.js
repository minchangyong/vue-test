// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import AjaxPlugin from './ajax'
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
Vue.use(AjaxPlugin)
import './less/reset.less'
import 'element-ui/lib/theme-default/index.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
