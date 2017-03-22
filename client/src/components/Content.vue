<template>
  <div id="main-content">
     <transition name="fade" appear>
      <router-view v-cloak></router-view>
    </transition>
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
  .fade-enter-active, .fade-leave-active {
    transition-property: opacity;
    transition-duration: .25s;
  }

  .fade-enter-active {
    transition-delay: .25s;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0;
    transition-duration: .25s;
    transition-delay: .25s;
  }

  [v-cloak] {
    display: none;
  }
</style>
