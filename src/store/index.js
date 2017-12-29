import Vue from 'vue'
import Vuex from 'vuex'
import * as userActions from './modules/userActions'
import * as employeeActions from './modules/employeeActions'

Vue.use(Vuex)

const state = {
  user: {
    name: '',
    lastName: '',
    email: '',
    password: '',
    selectedGender: 'Mrs',
    permission: 'block'
  },
  logged: false,
  baseUrl: 'http://localhost:8000/api/',
  employee: {
    name: '',
    lastName: '',
    address: '',
    email: '',
    subscriptionType: ['Oneshot'],
    selectedGender: 'Mr'
  },
  employeeList: [],
  userList: [],
  token: ''
}
const getters = {
  employeeList: () => state.employeeList
}

const mutations = {
  updateUser (state, { field, value }) {
    console.log({ field, value })
    Object.assign(state.user, { [field]: value })
  },
  updateEmployee (state, {field, value}) {
    Object.assign(state.employee, { [field]: value })
  },
  login () {

  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  modules: {
    namespaced: true,
    userActions,
    employeeActions
  }
})
