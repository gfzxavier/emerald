<template>
  <router-view></router-view>
  <command-overlay></command-overlay>
  <div class="background"/>
</template>

<script>

import CommandOverlay from './components/config/CommandOverlay.vue'

export default {
  name: 'App',
  components: {
    CommandOverlay
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.overlay{
  background: transparent;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  /* outline: none; */
}
.background{
  background: url('./assets/Background.png');
  background-position: bottom;
  background-repeat-y: no-repeat;
  z-index: -1;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #7693B3;
}
</style>
