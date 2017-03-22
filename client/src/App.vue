<template>
  <div id="app">
    <keep-alive>
      <app-header></app-header>
    </keep-alive>
    <main-content></main-content>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

export default {
  name: 'app',
  components: {
    'app-header': Header,
    'main-content': Content,
    'app-footer': Footer,
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
