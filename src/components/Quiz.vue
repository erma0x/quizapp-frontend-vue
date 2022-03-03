<template>
  <form id="Quiz" class="quiz">
    <button v-on:click="getScore(reply)" type="submit" class="btn btn-primary">
      Submit Quiz
    </button>
    <br />
    <div v-for="single_quiz in questions" v-bind:key="single_quiz.id">
      question id {{ single_quiz.id }} :
      {{ single_quiz.question }}
      <br />

      <div v-for="answer in single_quiz.answers" :key="answer">
        <br />
        <input
          type="radio"
          value="index"
          v-model="single_quiz.value"
          name="single_quiz.id"
          placeholder="answer"
          required="true"
          checked
        />
        {{ answer }}
      </div>
      <br />
    </div>
  </form>
</template>

<script>
export default {
  //
  // data : reply
  // props : questions, score

  // with GET quiz you get the followig array of objects
  // each has an id, question, and answers
  // id:0
  // question:"How many planets are there in the solar system?"
  // answers:Array[4]
  //   0:"answer1"
  //   1:"answer2"
  //   2:"answer3"
  //   3:"answer4"

  name: "Quiz",

  props: { questions: Array, score: Number },

  data() {
    return {
      reply: {
        type: Object,
        default: {},
      },

      getQuizURL: "http://localhost:3001/quiz",
      postAnswersURL: "http://localhost:3001/checkbox/",
    };
  },
};
</script>

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
