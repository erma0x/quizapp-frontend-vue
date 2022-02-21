<template>
  <div id="app">
    <img alt="App logo" src="./assets/logo.png" />
    <welcome></welcome>
    <new-quiz-button></new-quiz-button>
    <quiz></quiz>
    <!--button @click="getNewQuiz()"><button>
    <quiz :questions='myQuiz' > </quiz -->

  </div>
</template>


<script>
import Welcome from "./components/Welcome.vue";
import NewQuizButton from "./components/NewQuizButton.vue";
import Quiz from "./components/Quiz.vue";

export default {
  name: "App",

  components: {
    Welcome,
    NewQuizButton,
    Quiz,
  },
  props:["randomQuiz"]
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
