<template>
  <div class="player">
    <knight :action="command"></knight>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import knight from './characters/Knight.vue'
export default {
  name: 'player1',
  components: {
    knight
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters('Config', ['pressedButtons']),
    command() {
      if (this.pressedButtons == 'arrowright') {
        return 'running'
      }
      if (this.pressedButtons == 'z') {
        return 'attacking'
      }
      return 'stand'
    }
  }
}
</script>

<style lang="scss">
.player {
  position: absolute;
  display: flex;
}
</style>
