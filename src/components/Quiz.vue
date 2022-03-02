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

      <!-- //{{ answer }} -->
      <!-- 
questions:Array

id:0
question:"How many planets are there in the solar system?"
answers:Array[4]
  0:"risposta1"
  1:"risposta2"
  2:"risposta3"
  3:"risposta4" -->

      <!-- 
 <div v-for="element in elements" class="uk-form-row uk-margin-small-top">
     <input v-model="element.value" class="uk-width-1-1 uk-form-small" type="text" placeholder="element" style="width:50%">
  </div> -->


<script>
export default {
  name: "Quiz",

  props: { questions: Array, score: Number },
  data() {
    return {
      reply: {
        type: Object,
        default: {},
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
