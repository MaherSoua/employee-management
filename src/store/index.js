import Vue from 'vue'
import Vuex from 'vuex'
import userModules from './modules/userModules'
import employeeModules from './modules/employeeModules'

Vue.use(Vuex)

const state = {
  user: {},
  logged: false,
  baseUrl: 'http://localhost:8000/api/',
  employee: {},
  employeeList: [],
  userList: [],
  token: ''
}

export default new Vuex.Store({
  state,
  modules: {
    namespaced: true,
    userModules,
    employeeModules
  }
})
