<template>
  <div id="app">
    <img alt="App logo" src="./assets/logo.png" />
    <Welcome></Welcome>
    <button @click="getQuiz" class="btn btn-primary">New Quiz</button>
    <Quiz :questions="quizzes"> </Quiz>
    <Footer :title="copyrightTitle"></Footer>
  </div>
</template>


<script>
import Welcome from "./components/Welcome.vue";
import Quiz from "./components/Quiz.vue";
import Footer from "./components/Footer.vue";
import getNewQuiz from "./helpers.js";

export default {
  name: "App",

  data() {
    return {
      username: "Admin",
      copyrightTitle: "Skillbill s.r.l.",
      quizzes: [],
      score: 0,
    };
  },
  methods: {
    getQuiz: async function () {
      this.quizzes = await getNewQuiz();
      console.log("New quiz incoming ", this.quizzes);
    },
  },

  computed: {
    getNewQuiz() {
      return this.quizzes;
    },
  },

  components: {
    Welcome,
    Quiz,
    Footer,
  },
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
