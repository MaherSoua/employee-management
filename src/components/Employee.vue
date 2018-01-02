<template>
  <div>
    <h1>Add Employee</h1>
    <form v-if="!updated">
      <div class="row">
        <label for="">
          <input class="form-control" placeholder="Name" :value="employee.name" @keyup.stop="updateField('name' , $event)" type="text">
        </label>
      </div>
      <div class="row">
        <label for="">
          <input class="form-control" placeholder="Last Name" :value="employee.lastName" @keyup.stop="updateField('lastName' , $event)" type="text">
        </label>
      </div>
      <div class="row">
        <label for="">
          <input class="form-control" placeholder="Address" :value="employee.address" @keyup.stop="updateField('address' , $event)" type="text">
        </label>
      </div>
      <div class="row">
        <label for="">
          <input class="form-control" placeholder="Email" :value="employee.email" @keyup.stop="updateField('email' , $event)" type="text">
        </label>
      </div>
      <div class="row">
        <label for="">
          <select class="form-control" :value="employee.selectedGender"   @change.stop="updateField('selectedGender' , $event)">
            <option :value="gender" v-for="(gender, index) in genders" :key="index">
              {{gender}}
            </option>
          </select>
        </label>
      </div>
      <div class="row">
        <input type="checkbox" value="Oneshot" v-model="subscriptionType">
        <label for="jack">One Shot</label>
        <input type="checkbox" value="Monthly" v-model="subscriptionType">
        <label for="john">Monthly</label>
        <input type="checkbox" value="Quarterly" v-model="subscriptionType">
        <label for="mike">Quarterly</label>
        <br>
      </div>
      <button type="button" class="btn btn-primary" @click="submit()">{{buttonLabel}}</button>
    </form>
    <br>
    <h1 v-if="updated">Employee Updated</h1>
    <router-link to="/">Main Page</router-link>
    <EmployeeList @onedit="edit($event)" @onremove="remove($event)">
      <slot name="header"></slot>
    </EmployeeList>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import EmployeeList from './ListScreen'
  export default {

    data () {
      return {
        genders: ['Mr', 'Mrs', 'Mme'],
        buttonLabel: 'Submit',
        updated: false
      }
    },
    computed: {
      subscriptionType: {
        get () {
          return this.$store.state.employeeModules.employee.subscriptionType
        },
        set (value) {
          this.$store.commit('updateEmployee', {field: 'subscriptionType', value})
        }
      },
      ...mapState('employeeModules', ['employee'])
    },
    methods: {
      submit () {
        if (this.$route.query.id) {
          this.$store.dispatch('employeeModules/updateEmployee', this.employee)
          this.$router.push('/employee')
          this.updated = true
        } else {
          this.$store.dispatch('employeeModules/addEmployee', this.employee)
        }
      },
      updateField (field, event) {
        const value = event.target.value
        this.$store.commit('employeeModules/updateEmployee', {field, value})
      },
      edit (item) {
        this.$router.push('employee?id=' + item._id)
        this.$store.state.employee = item
        this.buttonLabel = 'Update'
        this.updated = false
      },
      remove (item) {
        this.$store.state.employee = {}
        this.$store.dispatch('employeeModules/removeEmployee', item._id)
      }
    },
    created () {
      if (this.$route.query.id) {
        this.$store.dispatch('employeeModules/getEmployeeById', this.$route.query.id)
        this.buttonLabel = 'Update'
      }
    },
    components: {EmployeeList}
  }
</script>

<style scoped>

</style>