// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import About from './components/about/About'
import TakeTest from './components/takeTest/TakeTest'
import StartTest from './components/startTest/StartTest'
import WhyJS from './components/whyJS/WhyJS'
import TutSrc from './components/tutSrc/TutSrc'
import NavigationMenu from './components/navigationMenu/NavigationMenu'
import router from './router'
import LocalStore from './localStorage'

Vue.config.productionTip = false
/* eslint-disable no-new */
// eslint-disable-next-line
/* eslint-disable */
/* eslint no-undef: 0 */

new Vue({
  el: '#app',
  router,
  components: { 
    App,
    About,
    TakeTest,
    StartTest,
    WhyJS,
    NavigationMenu,
    TutSrc
  },
  template: '<App/>',
  LocalStore
})
