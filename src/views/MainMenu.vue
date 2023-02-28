<template>
  <div class="main-menu">
    <main-menu-title />
  </div>
</template>

<script>
import MainMenuTitle from '../components/MainMenuTitle.vue'
export default {
  name: 'MainMenu',
  components: {
    MainMenuTitle
  }
}
</script>

<style scoped>
.main-menu {
  position: fixed;
  width: 100%;
  height: 100%;
  background: url('../assets/main-menu-background.gif');
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  image-rendering: pixelated;
  box-shadow: inset -130px 155px 264px #000;
}
</style>