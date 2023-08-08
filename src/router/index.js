import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/produtos',
      name: 'ProdutosIndex',
      component: () => import('../views/produtos/ProdutosIndex.vue')
    },
    {
      path: '/produtos/create',
      name: 'ProdutoCreate',
      component: () => import('../views/produtos/ProdutoCreate.vue')
    },
    {
      path: '/produtos/:id/edit',
      name: 'ProdutoEdit',
      component: () => import('../views/produtos/ProdutoEdit.vue')
    }
  ]
})

export default router
