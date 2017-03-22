<template>
  <div class="container">
    <input type="search" placeholder="Search..">
      <ul>
        <app-question-item v-for="question in questions" :question="question"></app-question-item>
      </ul>
    <h2 style="margin-left: 15px; text-align: left; margin-top: 50px;">Create Question</h2>
    <input type="text" v-model="inputTitle">
    <textarea  cols="100" rows="10" v-model="inputQuestion"></textarea>
    <button class="default-button" v-on:click="createQuestion">Create Question</button>
  </div>
</template>

<script>
import QuestionItem from './QuestionItem';

export default {
  name: 'Questions',
  components: {
    'app-question-item': QuestionItem,
  },
  data() {
    return {
      questions: [],
      inputQuestion: '',
      inputTitle: '',
    };
  },
  methods: {
    getQuestions() {
      this.axios.get('http://localhost:3000/question')
        .then((response) => {
          this.questions = response.data;
        })
        .catch((err) => {
          this.questions = err.message;
        });
    },
    createQuestion() {
      this.axios.post('http://localhost:3000/question', {
        UserId: 1,
        title: this.inputQuestion,
        questionContent: this.inputTitle,
      })
        .then(() => {
          this.getQuestions();
        });
    },
  },
  computed: {
  },
  mounted() {
    this.getQuestions();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


.container {
  margin-top: 50px
}

input[type=search] {
  width: 250px;
}

/* When the input field gets focus, change its width to 100% */

h1, h2 {
  font-weight: normal;
}


a {
  color: #d6fffa;
  font-weight: bold;
  font-size: 18px;
  text-decoration: none;
}

li {
  align-items: center;
  box-sizing: border-box;
  justify-content: space-around;
}

.stack-span-item {
  padding: 10px;
}
.stack-span-title {
  width: 65%;
}

.stack-span-time {
  font-size: 14px;
  color: #666666;
}
</style>
