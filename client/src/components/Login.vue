<template lang="html">
  <div class="login-container">
    email: <input type="text" v-model="email">
    password: <input type="password" v-model="password">
    <button type="button" @click="doLogin">Login</button>
    {{ message }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      message: '',
    };
  },
  methods: {
    doLogin() {
      this.$http.post('http://localhost:3000/auth/login', {
        email: this.email,
        password: this.password,
      })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem('token', response.data.token);
          this.$emit('afterLogin');
          this.$router.go('/');
        } else {
          this.message = response.data.message;
        }
      })
      .catch((err) => {
        this.message = err.message;
      });
    },
  },
};

</script>

<style lang="css">
</style>
