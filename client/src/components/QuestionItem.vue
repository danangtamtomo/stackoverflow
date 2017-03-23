<template>
  <router-link :to="{name: 'Question', params: {id:question.id}}">
      <li>
        <span class="stack-span-item">
          <p>{{ voteCount }}</p>
          <p>votes</p>
        </span>
        <span class="stack-span-item">
                <p>{{ question.Answers.length }}</p>
                <p>answers</p>
              </span>
        <span class="stack-span-item stack-span-title">
               {{ question.title }}
              </span>
        <span class="stack-span-item stack-span-time">
                {{ getTimeFromNow(question.createdAt) }}
         </span>
      </li>
  </router-link>
</template>

<script>
  export default {
    props: ['question'],
    data() {
      return {
        voteCount: 0,
      };
    },
    methods: {
      getTimeFromNow(time) {
        return this.$moment(time).fromNow();
      },
      countVotes() {
        this.$http.get(`http://localhost:3000/question/vote/count/${this.question.id}`)
          .then((response) => {
            this.voteCount = response.data.count;
          });
      },
    },
    computed: {
    },
    mounted() {
      this.countVotes();
    },
  };
</script>
