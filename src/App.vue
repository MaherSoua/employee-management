<template>
  <div id="app">
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link to="home" class="navbar-brand nav-item">Home</router-link>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">

            <li class="dropdown">
              <a
                href="#" class="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                @click="isEmployeeOpened = !isEmployeeOpened">Employee <span class="caret"></span>
              </a>
              <ul class="dropdown-menu"
                  @mouseleave="isEmployeeOpened = false"
                  @click="isEmployeeOpened = false"
                  :style="{display: isEmployeeOpened ? 'block': 'none'}">
                <li><router-link to="employee" class="nav-item">Add</router-link></li>
                <li role="separator" class="divider"></li>
                <li><router-link to="manage-employee-list" class="nav-item">List</router-link></li>
              </ul>
            </li>
            <li class="dropdown">
              <a
                href="#" class="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                @click="isOpened = !isOpened">User <span class="caret"></span>
              </a>
              <ul class="dropdown-menu"
                  @mouseleave="isOpened = false"
                  @click="isOpened = false"
                  :style="{display: isOpened ? 'block': 'none'}">
                <li><router-link to="add-user" class="nav-item">Add</router-link></li>
                <li role="separator" class="divider"></li>
                <li><router-link to="manage-user" class="nav-item">List</router-link></li>
              </ul>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <template v-if="!$store.state.token">
              <li><router-link to="login">Sign In</router-link></li>
              <li><router-link to="signup">Sign Up</router-link></li>
            </template>
            <template v-if="$store.state.token">
              <li><router-link to="/login">Sign Out</router-link></li>
            </template>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  data () {
    return {
      isOpened: false,
      isEmployeeOpened: false
    }
  },
  created () {
    this.$store.state.token = localStorage.getItem('token')
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

 nav a.nav-item.router-link-active  {
   background-color: lightskyblue;
   color: white;
   font-weight: bold;

  &:focus {
    background-color: lightskyblue;
    color: white;
    cursor: pointer;
  }
 }

</style>
