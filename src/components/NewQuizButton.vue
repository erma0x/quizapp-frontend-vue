<template>
  <div id="NewQuizButton" class="new-quiz-button">
    <button v-on:click="getNewQuiz()" class="btn btn-primary">
      New Quiz
    </button>
  </div>
</template>

<script>
export default {
  el: "NewQuizButton",

  data() {
    return {
      randomTest:{
        name:'randomTest',
        default:this.getNewQuiz(),
      },
    };
  },
  methods: {
    async getNewQuiz() {
      const url = "http://localhost:3001/quiz";
      let response = await fetch(url, { method: "GET" });
      let randomTest = await response.json();
      console.log(randomTest)
      this.$emit('myEvent')
      return randomTest; //this$emit
    },
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
