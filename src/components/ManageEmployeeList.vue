<template>
  <div>
    <EmployeeList :list="employeeList" @onedit="edit($event)" @onremove="remove($event)">
      <h1 slot="header"><p>Employee List</p></h1>
    </EmployeeList>
  </div>
</template>

<script>
  import EmployeeList from './ListScreen'
  import {mapState} from 'vuex'

  export default {
    data () {
      return {
        message: 'Manage'
      }
    },
    methods: {
      edit (item) {
        console.log(item)
        this.$router.push('employee?id=' + item._id)
      },
      remove (item) {
        this.$store.dispatch('updateEmployee', {action: 'remove', data: item._id})
      }
    },
    components: {EmployeeList},
    computed: {
      ...mapState(['employeeList'])
    }

  }
</script>

<style scoped>

</style>