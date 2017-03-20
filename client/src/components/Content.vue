<template>
  <div :duration="{ enter: 500, leave: 800 }" id="main-content">
    <router-view></router-view>
  </div>
</template>
<script>

</script>

<style>
  #main-content {
    margin: auto;
    width: 65%;
    display: flex;
    flex-direction: column;
  }
  #main-content ul {
    padding: 10px;
  }
  #main-content ul li {
    background: #ff981a;
    padding: 5px;
    margin-bottom: 5px;
    display: flex;
  }
</style>
