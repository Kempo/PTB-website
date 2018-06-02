// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.$authorName = 'Aaron Chen'

/* eslint-disable no-new */
new Vue({
  el: '#app', // hooks on to the index.html div id = "app". Used for injection (?) therefore #app is subject to change.
  router,
  components: { App },
  template: '<App/>' // crucial for rendering
})
