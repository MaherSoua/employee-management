import Vue from 'vue'
import VueRouter from 'vue-router'
import { Home, Employee, SignIn, SignUp, ManageEmployeeList, ManageUserList } from '@/components'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/employee',
      name: 'Employee',
      component: Employee,
      children: [
        {
          path: ':id',
          component: Employee
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: SignIn
    },
    {
      path: 'signup',
      name: 'Signup',
      component: SignUp
    },
    {
      path: '/manage-employee-list',
      name: 'ManageEmployeeList',
      component: ManageEmployeeList
    },
    {
      path: '/add-user',
      name: 'AddUser',
      component: SignUp
    },
    {
      path: '/manage-user',
      name: 'ManageUserList',
      component: ManageUserList
    }
  ]
})
