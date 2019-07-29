import Vue from 'vue'
import Router from 'vue-router'
import home from '../views/Home.vue'
import about from '../views/about/About'
import beses from '../views/about/beses'
import fund from '../views/fund/fund'
import project from '../views/project/project'
import contacts from '../views/contact/contact'
import news from '../views/news/news'
import newsa from '../views/news/newsa'
import recruit from '../views/recruit/recruit'
import cooperation from '../views/contact/cooperation'

Vue.use(Router)

export default new Router({
  mode: '',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },{
      path: '/about',
      name: 'about',
      component: about
    },{
      path: '/news',
      name: 'news',
      component: beses
    },{
      path: '/news/newslist/:id',
      name: 'newslist',
      component: news
    },{
      path: '/news/newsa/:id',
      name: 'newsa',
      component: newsa
    },{
      path: '/fund',
      name: 'fund',
      component: fund,
    },{
      path: '/project',
      name: 'project',
      component: project,
    },{
      path: '/contact',
      name: 'contact',
      component: beses
    },{
      path: '/contact/China',
      name: 'China',
      component: contacts,
    },{
      path: '/contact/Macao',
      name: 'Macao',
      component: contacts,
    },{
      path: '/contact/Hengqin',
      name: 'Hengqin',
      component: contacts,
    },{
      path: '/contact/siliconValley',
      name: 'siliconValley',
      component: contacts,
    },{
      path: '/contact/Vienna',
      name: 'Vienna',
      component: contacts,
    },{
      path: '/recruit',
      name: 'recruit',
      component: beses,
    },{
      path: '/recruit/recruitList/:id',
      name: 'recruitList',
      component: recruit,
    },{
      path: '/contact/cooperation',
      name: 'cooperation',
      component: cooperation,
    }
  ]
})