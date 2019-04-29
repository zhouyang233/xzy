import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import index from '@/components/pages/index'
import n from '@/components/pages/new'
export default new Router({
  routes: [
    {
      path: '/index',
      component:index
    },
    {
      path: '/new/:id',
      component:n
    },
    {
      path:'*',
      redirect:'/index'
    }
  ]
})
