import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Signup from '@/components/Signup'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Textt from '@/components/Textt'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Textt',
      component: Textt
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
