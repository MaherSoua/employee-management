<template>
  <div>
    <h1>Add User</h1>
    <form novalidate>
      <div class="row">
        <label for="">
          <input class="form-control" placeholder="Name" :value="user.name" @keyup.stop="updateField('name' , $event)" type="text">
        </label>
      </div>
      <div class="row">
        <label for="">
          <input class="form-control" placeholder="Last Name" :value="user.lastName" @keyup.stop="updateField('lastName' , $event)" type="text">
        </label>
      </div>
      <div class="row">
        <label for="">
          <input class="form-control" placeholder="Email" :value="user.email" @keyup.stop="updateField('email' , $event)" type="text">
        </label>
      </div>
      <template v-if="isCreateMode">
        <div class="row">
          <label for="">
            <input type="password" class="form-control" placeholder="Password" @keyup.stop="updateField('password' , $event)" :value="user.password">
          </label>
        </div>
        <div class="row">
          <label for="">
            <input type="password" class="form-control" placeholder="Confirm Password" :value="user.passwordConfirm" @keyup.stop="updateField('passwordConfirm' , $event)">
          </label>
        </div>
      </template>

      <div class="row">
        <input type="radio" value="block" v-model="user.permission" @click.stop="updateField('permission' , $event)">
        <label for="jack">Block</label>
        <input type="radio" value="read" v-model="user.permission" @click.stop="updateField('permission' , $event)">
        <label for="john">Read</label>
        <input type="radio" value="read_write" v-model="user.permission" @click.stop="updateField('permission' , $event)">
        <label for="mike">Read/Write</label>
      </div>
      <button type="button" @click="submit($event)" class="btn btn-primary">Submit</button>
    </form>
    <ul>
      <li v-for="user in userList" :key="user.id">
       {{ user.name }} {{user.lastName}} {{user.email}}
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    data () {
      return {
        isCreateMode: true
      }
    },
    methods: {
      async submit () {
        if (this.isCreateMode) {
          await this.$store.dispatch('addUser', this.user)
        } else {
          await this.$store.dispatch('updateUser', this.user)
        }
        this.user = {}
        this.$store.dispatch('getUserList')
      },
      updateField (field, event) {
        const value = event.target.value
        console.log(field, value)
        this.$store.commit('updateUser', {field, value})
      }
    },
    watch: {
      user: {
        handler (value, oldValue) {
          if (value.password && value.password.length >= 3 &&
              value.password === value.passwordConfirm) {
            console.log('it is the same')
          }
        },
        deep: true
      }
    },
    computed: {
      ...mapState(['userList', 'user'])
    },
    mounted () {
      if (this.$route.query.id) {
        this.isCreateMode = false
        this.$store.dispatch('getUserById', this.$route.query.id)
      }
    }
  }
</script>

<style scoped lang="scss">

</style>