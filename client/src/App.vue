<template>
  <div id="app">
    <keep-alive>
      <app-header></app-header>
    </keep-alive>
    <div @afterLogin="getDashboard">
      {{ coba }}
    </div>
    <button type="button" @click="doLogout" v-if="isLoggedIn">Logout</button>
    <main-content v-if="isLoggedIn"></main-content>
    <app-login v-else>Tes</app-login>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Login from './components/Login';

export default {
  name: 'app',
  data() {
    return {
      isLoggedIn: false,
      coba: 'tes',
    };
  },
  components: {
    'app-header': Header,
    'main-content': Content,
    'app-footer': Footer,
    'app-login': Login,
  },
  methods: {
    checkLogin() {
      if (localStorage.getItem('token')) {
        this.isLoggedIn = true;
        this.checkLogin();
      } else {
        this.isLoggedIn = false;
        this.checkLogin();
      }
    },
    doLogout() {
      localStorage.removeItem('token');
      this.checkLogin();
    },
    getDashboard() {
      this.coba = 'lah bisa';
    },
  },
  mounted() {
    this.checkLogin();
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0px;
}

textarea {
  background: rgba(3, 7, 8, 0.79);
  width: 100%;
  border: solid thin #ccc;
  padding: 10px;
  color: #ccc;
  font-size: 14px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
