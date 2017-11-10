<template>
  <div>
    <p>
      <router-link :to="'/'">Home</router-link>
      <router-link :to="'/about'">about</router-link>
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
    color: #f00;
  }
</style>
