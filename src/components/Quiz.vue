<template>
  <div> <!-- single root element here -->

    <div v-for="quiz in quizzes " :key="quiz.id">

        {{quiz.question}}
        <div id="quiz.id">
            <div v-for="answer in quiz.answers " :key="answer.id">
            <input type="radio" id=quiz.id name="answer" value=answer.id 
            required=true checked>
            <label value=answer.id>{{answer}}</label>
            </div> 
      </div>
    </div>

  </div>
</template>

<script>
export default {

data() {
  return {
    quizzes: [{
          id: 0,
          question: "Quanti pianeti ci sono nel sistema solare?",
          answers: ["7", "9", "8", "10"],
          correct: 2,
        },
        {
          id: 1,
          question: "Quanti denti ha un essere umano adulto?",
          answers: ["28", "30", "32", "34"],
          correct: 2,
        }]
  }
}
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
  margin: 0 8px;
}
a {
  color: #eb0808;
}
</style>
