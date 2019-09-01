import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/about/About'
import WhyJS from '@/components/whyJS/WhyJS'
import TakeTest from '@/components/takeTest/TakeTest'
import StartTest from '@/components/startTest/StartTest'
import TutSrc from '@/components/tutSrc/TutSrc'
import NavigationMenu from '@/components/navigationMenu/NavigationMenu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/whyJS',
      name: 'WhyJS',
      component: WhyJS
    },
    {
      path: '/takeTest',
      name: 'TakeTest',
      component: TakeTest
    },
    {
      path: '/startTest',
      name: 'StartTest',
      component: StartTest
    },
    {
      path: '/tutSrc',
      name: 'TutSrc',
      component: TutSrc
    },
    {
      path: '/navigationMenu',
      name: 'NavigationMenu',
      component: NavigationMenu
    }
  ]
})
