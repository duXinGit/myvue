<template>
  <div id="about">
    <div>
      <router-link :to="'/'">Home</router-link>
      <router-link :to="'/list'">list</router-link>
    </div>
    <h2>{{ msg }}</h2>
    When you have a great story about how your product or service was built to change lives, share it. The "About Us" page is a great place for it to live, too. Good stories humanize your brand, providing context and meaning for your product. What’s more, good stories are sticky -- which means people are more likely to connect with them and pass them on.
  </div>
</template>

<script>
  export default {
    name: 'about',
    data(){
      return {
        msg: '这里是about.vue'
      }
    }
  }
</script>
<!-- styling for the component -->
<style scoped>
  #about {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  a {
    color: #42b983;
    text-decoration: none;
  }
</style>
