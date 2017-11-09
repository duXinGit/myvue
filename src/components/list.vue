<template>
  <div>
    <p><a href="/">Home</a>
      <router-link v-bind:to="'/about'">about</router-link>
    </p>
    <div>首页链接跳我这儿，这里是<h2>{{ msg }}</h2></div>
  </div>
</template>
<script>
export default {
  name: 'list',
  data () {
      return {
          msg: 'list.vue'
      }
  }
}
</script>

<style scoped>

  a {
    color: #42b983;
  }
</style>
