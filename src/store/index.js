import Vue from 'vue'
import Vuex from 'vuex'
import userModules from './modules/userModules'
import employeeModules from './modules/employeeModules'

Vue.use(Vuex)

const state = {
  logged: false,
  baseUrl: 'http://localhost:8000/api/',
  token: ''
}

export default new Vuex.Store({
  state,
  modules: {
    userModules,
    employeeModules
  }
})
