import axios from 'axios'
import router from '../../router'

export const actions = {
  login ({ commit, rootState }, data) {
    axios.post(rootState.baseUrl + 'login', data)
      .then(response => {
        rootState.token = response.data.token
        localStorage.setItem('token', rootState.token)
        router.push('/')
      }).catch(err => {
        console.log(err)
      })
  },
  checkToken ({ rootState }, data) {
    axios.get(rootState.baseUrl + 'checkToken?token=' + data)
      .then(response => {
        rootState.token = response.data.token
        localStorage.setItem('token', rootState.token)
      }).catch(() => {
        localStorage.setItem('token', null)
        router.push('/login')
      })
  },
  addUser ({rootState}, data) {
    axios.post(rootState.baseUrl + 'addUser?token=' + rootState.token, data)
      .catch(() => {
        localStorage.setItem('token', null)
        router.push('/login')
      })
  },
  updateUser ({ rootState }, data) {
    axios.post(rootState.baseUrl + 'updateUser?token=' + rootState.token, data)
      .catch(() => {
        localStorage.setItem('token', null)
        router.push('/login')
      })
  },
  getUserById ({ rootState }, data) {
    axios.get(rootState.baseUrl + 'getUserById?token=' + rootState.token + '&id=' + data, data)
      .then(response => {
        rootState.user = response.data.result
      })
  },
  removeUser ({ rootState }, data) {
    axios.post(rootState.baseUrl + 'removeUser?token=' + rootState.token, { id: data })
      .then(response => {
        rootState.userList = response.data.list
      })
  },
  getUserList ({ rootState }) {
    axios.get(rootState.baseUrl + 'getUsers?token=' + rootState.token)
      .then(
      response => {
        rootState.userList = response.data.list
      }).catch(err => {
        console.log(err)
      })
  }
}
