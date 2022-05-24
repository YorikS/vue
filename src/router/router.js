import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/pages/HomePage"
import CarsTable from "@/pages/CarsTable"
import ClientsTable from "@/pages/ClientsTable"
import DriversTable from "@/pages/DriversTable"
import OrdersTable from "@/pages/OrdersTable"


const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: HomePage
  },
  {
    path: '/cars',
    name: 'cars',
    component: CarsTable
  },
  {
    path: '/clients',
    name: 'clients',
    component: ClientsTable
  },
  {
    path: '/drivers',
    name: 'drivers',
    component: DriversTable
  },
  {
    path: '/orders',
    name: 'orders',
    component: OrdersTable
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router