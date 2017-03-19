<template>
  <ul>
    <li v-for="question in questions">
      <span class="stack-span-item">
        <p>{{ question.votes }}</p>
        <p>votes</p>
      </span>
      <span class="stack-span-item">
        <p>0</p>
        <p>answers</p>
      </span>
      <span class="stack-span-item stack-span-title">
        <a href="#">{{ question.title }}</a>
      </span>
      <span class="stack-span-item stack-span-time">
        {{ question.createdAt }}
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Question',
  data() {
    return {
      questions: this.getQuestions(),
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
}

.stack-span-item {
  box-sizing: border-box;
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
