<template>
  <div class="welcome">
    <h1>Hello {{ user }}</h1>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  props: {
    user: {
      type: String,
      default: "Ermano",
    },

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
