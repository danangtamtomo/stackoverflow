<template>
  <div>
    <div class="answer-container">
      <div class="answer-item">
        <div class="vote">
          <div class="vote-up"></div>
          <div class="vote-down"></div>
        </div>
      </div>
      <div class="answer-item answer-content">
        {{ answer.answerContent }}
      </div>
      <div class="answer-item answer-description">
        answered {{ getTimeFromNow }}
        <br>
        by {{ answer.User.Profile.displayName }}
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Answer',
    props: ['answer'],
    data() {
      return {
      };
    },
    computed: {
      getTimeFromNow() {
        return this.$moment(this.createdAt).fromNow();
      },
    },
    methods: {
    },
  };
</script>

<style>
  textarea {
    background: #90acba;
    border: solid thin #ccc;
    padding: 10px;
    color: white;
    font-size: 14px;
  }
  .default-button {
    width: 150px;
    height: 30px;
    border: solid #00B7FF thin;
    background: #00B7FF;
    box-shadow: 2px 1px 1px #ccc;
    border-radius: 20px;
    color: #fff;
    font-size: 14px;
  }
  .answer-container {
    background: #dbd5d6;
    color: darkslateblue;
    margin: 10px;
    display: flex;
    align-items: center;
    flex-direction: row;
    box-shadow: 1px 3px 2px #ccc;
  }

  .answer-item {
    padding: 15px;
  }

  .answer-content {
    text-align: left;
    width: 80%;
  }

  .answer-description {
    font-size: 0.8em;
    text-align: left;
  }
</style>
