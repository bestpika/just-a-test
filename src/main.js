import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './bootstrap.js'
import dayjs from 'dayjs'

import kbAction from './mixins/kbAction'

window.dayjs = dayjs
Vue.mixin(kbAction)

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  components: {},
  render: h => h(App)
})
