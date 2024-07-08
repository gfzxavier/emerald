<template>
  <router-view />
  <Config />
</template>

<script>
import Config from './components/Config'

export default {
  name: 'App',
  components: {
    Config
  }
}
</script>

<style>
html,
body {
  margin: 0;
}
</style>
