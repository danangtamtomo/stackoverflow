<template>
  <div>
    <input type="search" v-model="questionSearch">
  <ul>
    <li v-for="question in questions" v-if="searchQuestion.test(question.title)">
      <span class="stack-span-item">
        <p>{{ question.votes }}</p>
        <p>votes</p>
      </span>
      <span class="stack-span-item">
        <p>0</p>
        <p>answers</p>
      </span>
      <span class="stack-span-item stack-span-title">
        <a :href="'question/'+question.id">{{ question.title }}</a>
      </span>
      <span class="stack-span-item stack-span-time">
        {{ getTimeFromNow(question.createdAt) }}
      </span>
    </li>
  </ul>
  </div>
</template>

<script>
export default {
  name: 'Questions',
  data() {
    return {
      questions: [],
      questionSearch: '',
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
    getQuestion(id) {
      this.$router.push(`/question/${id}`);
    },
    getTimeFromNow(time) {
      return this.$moment(time).fromNow();
    },
  },
  computed: {
    searchQuestion() {
      return new RegExp(this.questionSearch, 'i');
    },
  },
  mounted() {
    this.getQuestions();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
