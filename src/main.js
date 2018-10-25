import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './bootstrap.js'
import hack from './mixins/hack'

Vue.mixin(hack)

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  components: {},
  render: h => h(App)
})
