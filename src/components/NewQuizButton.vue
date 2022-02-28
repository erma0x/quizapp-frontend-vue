<template>
  <div id="NewQuizButton" class="new-quiz-button">
    <button v-on:click="getNewQuiz" class="btn btn-primary">New Quiz</button>
  </div>
</template>

<script>
//import routes from '../routes'
//import getNewQuiz from '../helpers.js'
export default {
  name: "NewQuizButton",
  
  data() {
    return {
      newTest: false,
    };
  },
};
</script>

<style scoped>
div {
  margin: 10px 0 0;
  padding: 5;
}
button {
  margin: 10px 0 0;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 0px;
}
.NewQuizButton {
  color: #42b983;
}
</style>
