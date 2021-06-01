import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Goals from '../views/Goals.vue';
import Clients from '../views/Clients.vue';
import Employees from '../views/Employees.vue';
import Products from '../views/Products.vue';
import Settings from '../views/Settings.vue';
import Supplier from '../views/Supplier.vue';
import Tasks from '../views/Tasks.vue';

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/metas',
    name: 'Metas',
    component: Goals
  },
  {
    path: '/tarefas',
    name: 'Tarefas',
    component: Tasks
  },
  {
    path: '/clientes',
    name: 'Clientes',
    component: Clients
  },
  {
    path: '/fornecedor',
    name: 'Fornecedor',
    component: Supplier
  },
  {
    path: '/produtos',
    name: 'Produtos',
    component: Products
  },
  {
    path: '/funcionarios',
    name: 'Funcionarios',
    component: Employees
  },
  {
    path: '/ajustes',
    name: 'Ajustes',
    component: Settings
  },
  {
    path: '/',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
