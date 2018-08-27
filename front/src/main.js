// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import M from 'materialize-css'
import _ from 'lodash'
require('../node_modules/materialize-css/dist/css/materialize.min.css')
require('../node_modules/material-icons/iconfont/material-icons.css')
require('../node_modules/animate.css/animate.min.css')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
