<template>
  <div>

    <UserList :list="userList" @onedit="edit($event)" @onremove="remove($event)">
      <h1 slot="header">User List</h1>
    </UserList>
  </div>
</template>

<script>
  import UserList from './ListScreen'
  import {mapState} from 'vuex'

  export default {
    components: {
      UserList
    },
    methods: {
      edit (item) {
        this.$router.push('add-user?id=' + item._id)
      },
      remove (item) {
        this.$store.dispatch('removeUser', item._id)
      }
    },
    computed: {
      ...mapState(['userList'])
    },
    created () {
      this.$store.dispatch('getUserList')
    }
  }
</script>

<style scoped>

</style>