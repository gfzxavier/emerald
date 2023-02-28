<template>
  <div class="main-menu-title">
    <img src="../assets/img/logo.png" class="main-menu-title__logo">

    <main-menu-options />
  </div>
</template>

<script>
import MainMenuOptions from './MainMenuOptions.vue'
export default {
  name: 'MainMenuTitle',
  components: {
    MainMenuOptions
  }
}
</script>

<style lang="scss" scoped>
.main-menu-title{
  position: absolute;
  right: 60px;
  top: 50px;

  &__logo {
    width: 580px;
  }
}
</style>