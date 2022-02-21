<template>
  <form id="Quiz" class="quiz">
    <button class="btn btn-primary" type="submit">Submit Quiz</button>
    <p></p>
    <div v-for="quiz in quizzes" :key="quiz.id">

      <label hidden>{{ quiz.id }}</label>
      {{ quiz.question }}
      <p></p>
      <div id="quiz.id">
        <div v-for="answer in quiz.answers" :key="answer.id">
          <input
            type="radio"
            id="quiz.id"
            name="quiz.id"
            value="quiz.id"
            required="true"
            checked
          />
          <label>{{ answer }}</label>
          <p></p>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      quizzes: [
            {
      "id": 0,
      "question": "How many planets are there in the solar system?",
      "answers": [
        "7",
        "9",
        "8",
        "10"
      ],
      "correct": 2
    },
    {
      "id": 1,
      "question": "How many teeth does an adult human have?",
      "answers": [
        "28",
        "30",
        "32",
        "34"
      ],
      "correct": 2
    },
    {
      "id": 2,
      "question": "What is the name of a famous explorer?",
      "answers": [
        "Vespucci",
        "Machiavelli",
        "Da Vinci",
        "Galileo"
      ],
      "correct": 0
    },
    {
      "id": 3,
      "question": "When did Rome fall into the hands of the Barbarians?",
      "answers": [
        "214 dC",
        "612 dC",
        "22 aC",
        "472 dC"
      ],
      "correct": 3
    },
    {
      "id": 4,
      "question": "Which of these is a programming tool? ",
      "answers": [
        "VPN",
        "Word",
        "PowerPoint",
        "HTML"
      ],
      "correct": 3
    }

      ],
      fetchURL: "http://localhost:3001/quiz",
    };
  },

  methods: {
    async getNewQuiz() {
      const url = this.fetchURL;
      let response = await fetch(url, { method: "GET" });
      this.quizzes = await response.json();
    },
    async getScore(url, quizAnswers) {
      // quizAnswers {id-quiz : number-answer} => score %
      let response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(quizAnswers),
        headers: { "content-type": "application/json" },
      });
      let quizScore = await response.json();
      console.log("CLIENT quiz score : ", quizScore);
      return quizScore;
    },
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
  margin: 0 8px;
}
a {
  color: #eb0808;
}
</style>
