<template>
  <div>
    <slot name="header"></slot>
    <ul class="list-group">
      <li class="list-group-item" v-for="item in list" :key="item.id">
        <div class="col-md-2">{{ item.name }}</div>
        <div class="col-md-8">details</div>
        <div class="col-md-2" >
          <button @click="editEmployee(item)">Edit</button>
          <button @click="removeEmployee(item)">Remove</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        title: 'Employee List'
      }
    },
    props: {
      list: Array
    },
    created () {
    },
    methods: {
      editEmployee (item) {
        this.$emit('onedit', item)
      },
      removeEmployee (item) {
        this.$emit('onremove', item)
      }
    }
  }
</script>

<style scoped>
  .list-group-item{
    float: left;
    width: 100%;
  }
</style>