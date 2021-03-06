// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import store from './store'
import colors from 'vuetify/es5/util/colors'
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import axios from 'axios'
import VueAnalytics from 'vue-analytics'
import('../node_modules/vuetify/dist/vuetify.min.css') // Ensure you are using css-loader

Vue.use(VueAnalytics, {
  id: 'UA-74104605-7',
  router,
  autoTracking: {
    pageviewOnLoad: false
  }
})

Vue.use(Vuetify, {
  theme: {
    primary: colors.pink.darken1,
    secondary: colors.pink.lighten1,
    accent: colors.pink.accent1,
    error: '#b71c1c'
  }
})

// AXIOS CONFIG
if (process.env.NODE_ENV !== 'production') {
  const port = 8080
  axios.defaults.baseURL = location.protocol + '//' + location.hostname + ':' + port
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})

Vue.config.productionTip = false
Vue.config.devtools = true
