<template>
  <div class="hello">
    <router-link :to="'/'">home</router-link>
    <router-link :to="'/about'">about</router-link>
    <h1>{{ msg }}</h1>
    <ul>
      <li><a :href="'/list'">点击跳转</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: '这里是index.vue'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
