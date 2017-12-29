import axios from 'axios'
import router from '../../router'

export const actions = {
  getEmployee ({ rootState }, data) {
    axios.get(rootState.baseUrl + 'getEmployeeList?token=' + rootState.token).then(result => {
      rootState.employeeList = result.data.list.filter(item => Boolean(item.name))
    }).catch(() => {
      router.push('/login')
    })
  },
  addEmployee ({ rootState }, data) {
    rootState.employee = data
    axios.post(rootState.baseUrl + 'addEmployee?token=' + rootState.token, rootState.employee)
      .then(result => {
        rootState.employeeList = result.data.list
      })
      .catch(() => {
        router.push('/login')
      })
  },
  removeEmployee ({ rootState }, data) {
    axios.post(rootState.baseUrl + 'removeEmployee?token=' + rootState.token, { id: data }).then(response => {
      rootState.employeeList = response.data.list
    })
  },
  getEmployeeById ({ rootState }, data) {
    axios.get(rootState.baseUrl + 'getEmployeeById?token=' + rootState.token + '&id=' + data).then(response => {
      rootState.employee = response.data.result[0]
    }).catch(() => {
      router.push('/login')
    })
  },
  updateEmployee ({ rootState }, data) {
    axios.post(rootState.baseUrl + 'updateEmployee?token=' + rootState.token, data).then(response => {
      rootState.employeeList = response.data.list
    }).catch(() => {
      router.push('/login')
    })
  }
}
