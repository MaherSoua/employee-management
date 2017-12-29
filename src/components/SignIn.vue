<template>
  <div>
    Log In
    <form action="">
      <div class="row">
        <label for="">
          <input class="form-control" v-model="user.email" type="text">
        </label>
      </div>
      <div class="row">
        <label for="">
          <input class="form-control" v-model="user.password" type="password">
        </label>
      </div>
      <button type="button" class="btn btn-primary" @click="login">Login</button>
    </form>
    {{result}}
  </div>
</template>

<script>
  export default {
    data () {
      return {
        user: {},
        result: ''
      }
    },
    created () {

    },
    methods: {
      login () {
        this.$store.dispatch('login', this.user)
      }
    }
  }
</script>

<style scoped>

</style>