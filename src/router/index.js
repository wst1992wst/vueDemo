import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Item from '@/components/item'
import Score from '@/components/score'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/item',
      name: 'Item',
      component: Item
    },
    {
      path: '/score',
      name: 'Score',
      component: Score
    }
  ]
})
