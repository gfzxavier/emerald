<template>
  <div class="main-menu-options">
    <div
      v-for="(item, index) in options"
      :key="index"
      class="main-menu-options__item"
    >
      <Cursor v-if="item.active" />
      {{ item.text }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Cursor from '../UI/Cursor.vue'
export default {
  name: 'MainMenuOptions',
  components: {
    Cursor
  },
  data() {
    return {
      options: [
        {
          text: 'Novo jogo',
          active: true
        },
        {
          text: 'Sair',
          active: false
        }
      ]
    }
  },
  computed: {
    ...mapGetters('Config', ['pressedButtons']),
    currentActiveItem() {
      return this.options.find((element) => element.active)
    },
    currentActiveItemIndex() {
      return this.options.findIndex((element) => element.active)
    }
  },
  watch: {
    pressedButtons: async function (command) {
      const previousItem = this.options[this.currentActiveItemIndex - 1]
      const currentItem = this.options[this.currentActiveItemIndex]
      const nextItem = this.options[this.currentActiveItemIndex + 1]

      if (command == 'arrowdown') {
        if (this.currentActiveItemIndex < this.options.length - 1) {
          currentItem.active = false
          nextItem.active = true
        }
      } else if (command == 'arrowup') {
        if (this.currentActiveItemIndex != 0) {
          currentItem.active = false
          previousItem.active = true
        }
      } else if (command == 'enter') {
        switch (this.currentActiveItem.text) {
          case 'Novo jogo':
            this.$router.push('/LevelOne')
            break
          case 'Sair':
            await window.electronApi.closeApp()
            break
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
}
</style>
