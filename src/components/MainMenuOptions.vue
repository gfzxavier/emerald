<template>
  <div class="main-menu-options">
    <div class="main-menu-options__item">
      Novo jogo
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainMenuTitle',
}
</script>

<style lang="scss" scoped>

@font-face {
  font-family: Pixellari;
  src: url('../assets/font/Pixellari.ttf');
}

.main-menu-options{
  display: flex;
  flex-direction: column;
  font-family: Pixellari;
  text-align: right;
  color: rgb(255, 255, 255);
  font-size: 70px;
  padding-right: 15px;

  &__item{
    -webkit-text-stroke-width:4px;
    -webkit-text-stroke-color: black;
  }
}
</style>