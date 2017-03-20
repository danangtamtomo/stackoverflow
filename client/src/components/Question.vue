<template>
  <div style="margin: 5px;">
    <div class="question-container">
      <div class="question-title">
        <h2>{{ question.title }}</h2>
      </div>
      <div class="question-body">
        12
        <div class="vote">
          <div class="vote-up"></div>
          <div class="vote-down"></div>
        </div>
        <div class="question-content">
          {{ question.questionContent }}
        </div>
        <div class="question-footer">
          <p>asked {{ this.$moment(question.createdAt).fromNow() }}</p>
          <p>by {{ question.User.Profile.displayName }}</p>
        </div>
      </div>
    </div>
    <h2 style="margin-left: 15px; text-align: left;">Answers</h2>
      <app-answer-of-question v-for="answer in answers" :answer="answer"></app-answer-of-question>
    <div class="pre-answer answer-container" v-if="answer">
      <div class="answer-item">
        {{ answer }}
      </div>
    </div>
    <h2 style="margin-left: 15px; text-align: left; margin-top: 50px;">Answer question</h2>
    <textarea wrap="off" cols="100" rows="10" v-model="answer"></textarea>
    <button class="default-button" v-on:click="createAnswer">Answer</button>
  </div>
</template>

<script>
import Answer from './Answer';

export default {
  name: 'Question',
  components: {
    'app-answer-of-question': Answer,
  },
  data() {
    return {
      question: [],
      answers: [],
      answer: '',
    };
  },
  methods: {
    getQuestion(id) {
      this.axios.get(`http://localhost:3000/question/${id}`)
        .then((response) => {
          this.question = response.data;
        })
        .catch((err) => {
          this.question = err.message;
        });
    },
    getAnswersOfQuestion() {
      this.axios.get(`http://localhost:3000/answer/of/question/${this.$route.params.id}`)
        .then((response) => {
          this.answers = response.data;
        })
        .catch((err) => {
          this.answers = err.message;
        });
    },
    createAnswer() {
      this.axios.post('http://localhost:3000/answer', {
        QuestionId: this.$route.params.id,
        UserId: 1,
        answerContent: this.answer,
      })
        .then(() => {
          this.getAnswersOfQuestion();
          this.answer = '';
        });
    },
  },
  mounted() {
    this.getQuestion(this.$route.params.id);
    this.getAnswersOfQuestion();
  },
};
</script>

<style>
  @keyframes pre-ans {
    from {
      font-size: 21px;
      background: #ff5d49;
    }
    to {
      font-size: 15px;
      background: #ffd133;
    }
  }
  .pre-answer {
    animation-name: pre-ans;
    animation-duration: 4s;
  }

  .question-container {
  }

  .question-container hr {
    height: 10px;
    border: 0;
    box-shadow: 0 10px 10px -10px #8c8b8b inset;
    width: 90%;
  }

  .question-title {
    padding: 10px;
  }

  .question-body {
    display: flex;
    align-items: center;
    padding: 20px;
    background: #ff981a;
    text-align: left;
    box-shadow: 2px 2px 2px #ccc;
  }

  .question-content {
    margin-left: 10px;
    width: 90%;
  }

  .question-footer {
    font-size: 12px;
    padding: 20px;
    float: right;
  }
  .question-footer p {
    margin: 0px;
  }

  .vote-up {
    display: inline-block;
    overflow: hidden;
    width: 50px;
    height: 30px;
    cursor: pointer;
    background: url('../assets/vote.png');
    background-size: 50px;
    background-position: 0px 0px;
  }

  .vote-down {
    display: inline-block;
    overflow: hidden;
    width: 50px;
    height: 30px;
    cursor: pointer;
    background: url('../assets/vote.png');
    background-size: 50px;
    background-position: 0px -35px;
  }

</style>
