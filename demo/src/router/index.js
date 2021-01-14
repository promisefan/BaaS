import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Signup from '@/components/Signup'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Textt from '@/components/Textt'
import QueryText from '@/components/QueryText'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'QueryText',
    //   component: QueryText
    // },
    {
      path: '/textt',
      name: 'Textt',
      component: Textt
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
        path: '/',
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
