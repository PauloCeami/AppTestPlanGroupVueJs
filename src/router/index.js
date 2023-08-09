import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProdutoManagerVue from '@/views/ProdutoManager.vue'
import CreateProdutoVue from '@/views/CreateProduto.vue'
import EditProdutoVue from '@/views/EditProduto.vue'
import ProdutoViewVue from '@/views/ProdutoView.vue'
import PageNotFoundVue from '@/views/PageNotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: "/produtos",
    component: HomeView
  },
  {
    path: '/produtos',
    name: 'ProdutoManager',
    component: ProdutoManagerVue
  },
  {
    path: '/produtos/create',
    name: 'CreateProdutoVue',
    component: CreateProdutoVue
  },
  {
    path: '/produtos/:id/edit',
    name: 'EditProdutoVue',
    component: EditProdutoVue
  },
  {
    path: '/produtos/:id',
    name: 'ProdutoViewVue',
    component: ProdutoViewVue
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: PageNotFoundVue
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
