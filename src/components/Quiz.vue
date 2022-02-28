<template>
  <form v-on:click="getNewQuiz()" id="Quiz" class="quiz">
    <button v-on:click="getScore()" type="submit" class="btn btn-primary">
      Submit Quiz
    </button>
    <br />
    <div v-for="quiz in quizzes" v-bind:key="quiz.id">
      <label hidden>{{ quiz.id }}</label>
      {{ quiz.question }}
      <br />
      <div id="quiz.id">
        <div v-for="answer in quiz.answers" :key="answer.id">
          <input
            type="radio"
            id="quiz.id"
            value="quiz.id"
            required="true"
            checked
          />
          <label>{{ answer }}</label>
          <br />
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "Quiz",

  data() {
    return {
      quizzes: {
        type: Array,
        default : []
      },
      quizScore: {
        type: Number,
        default: 0,
      },

      getQuizURL: {
        type: String,
        default: "http://localhost:3001/quiz",
      },

      postAnswersURL: {
        type: String,
        default: "http://localhost:3001/checkbox/",
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  font-size: 10;
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
  margin: 10 8px;
}
a {
  color: #eb0808;
}
</style>
