<template>
  <div id="app">
    <app-header></app-header>
    <main-content></main-content>
  </div>
</template>

<script>
import Header from './components/Header';
import Content from './components/Content';

export default {
  name: 'app',
  components: {
    'app-header': Header,
    'main-content': Content,
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
