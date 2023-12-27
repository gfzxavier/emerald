<template>
  <div class="main-menu-options">
    <div v-for="(item, index) in options" :key="index" class="main-menu-options__item">
      <Cursor v-if="item.active" />
      {{ item.text }}
    </div>
  </div>
</template>

<script>
import Cursor from '../UI/Cursor.vue'
export default {
  name: 'MainMenuTitle',
  components: {
    Cursor
  },
  data(){
    return {
      options: [
        {
          text: 'Novo jogo',
          active: true,
        },
        {
          text: 'Sair',
          active: false,
        }
      ]
    }
  },
  watch:{
    '$store.getters.getPressedButton': function(command) {

      let currentActiveItem = this.options.findIndex((element) => element.active)

      if(command == 'arrowdown') {
        if(currentActiveItem < this.options.length - 1){
          this.options[currentActiveItem].active = false
          this.options[currentActiveItem + 1].active = true
        }
      } else if (command == 'arrowup') {
        if(currentActiveItem != 0){
          this.options[currentActiveItem].active = false
          this.options[currentActiveItem - 1].active = true
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

@font-face {
  font-family: Pixellari;
  src: url('../../assets/font/Pixellari.ttf');
}

.main-menu-options {
  display: flex;
  flex-direction: column;
  position: relative;
  font-family: Pixellari;
  text-align: right;
  color: rgb(255, 255, 255);
  font-size: 70px;
  padding-right: 15px;

  &__item {
    margin-bottom: 15px;
    filter: drop-shadow(2px 4px 3px black);
  }
  &__cursor {
    height: 50px;
    transform: rotate(45deg);
    animation: moving-cursor 1s ease-in-out infinite;
  }
}
</style>