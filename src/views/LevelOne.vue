<template>
  <div id="level-one">
    <div class="background"></div>
    <player></player>
  </div>
</template>

<script>
import player from '../components/Player.vue'
export default {
  name: 'MainMenu',
  components:{
    player
  },
}
</script>

<style scoped>
.background{
  background: url('../assets/img/LevelOne/Background.png');
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