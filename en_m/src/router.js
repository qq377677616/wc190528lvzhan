import Vue from 'vue'
import Router from 'vue-router'

import home from './views/home'
import shenzhen from './views/contact/shenzhen'
import team from './views/team/team'
import lmodel from './views/lmodel/lmodel'
import lproject from './views/lproject/lproject'




Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path: '*', redirect: '/home/'},
    {
      path: '/home/',
      name: 'home',
      component: home
    },
    {
      path: '/team/',
      name: 'team',
      component: team,

    },
    {
      path:'/lmodel/',
      name: 'lmodel',
      component:lmodel
    },
    {
      path:'/lproject/',
      name: 'lproject',
      component:lproject
    },

    {
      path: '/contact/shenzhen',
      name: 'shenzhen',
      component: shenzhen,
    },
    {
      path: '/contact/hengqin',
      name: 'hengqin',
      component: shenzhen,
    },
    {
      path: '/contact/macau',
      name: 'macau',
      component: shenzhen,
    },
    {
      path: '/contact/silicon',
      name: 'silicon',
      component: shenzhen,
    },
    {
      path: '/contact/valley',
      name: 'valley',
      component: shenzhen,
    },

  ]
})
