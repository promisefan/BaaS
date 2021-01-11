// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import AV from 'leancloud-storage' ;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

AV.init({

appId:"QHEceQRyklNcO8EYnEUR7M7t-9Nh9j0Va",
appKey:"N5pjcmJ8sHRYG0VDwN4hKlP9",
serverURL:"https://qheceqry.lc-cn-e1-shared.com"

})