<template>
  <router-view />
  <command-overlay></command-overlay>
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
html, body {
  margin: 0;
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
</style>
