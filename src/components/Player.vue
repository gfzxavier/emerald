<template>
  <div class="player">
    <knight :action="command"></knight>
    <!-- <knight :action="'stand'"></knight>
    <knight :action="'running'"></knight>
    <knight :action="'attacking'"></knight> -->
  </div>
</template>

<script>
import knight from './characters/Knight.vue'
export default {
  name: 'player1',
  components:{
    knight
  },
  data(){
    return {
    }
  },
  computed: {
    command() {
      if(this.$store.getters.getPressedButton == 'arrowright') {
        return 'running'
      }
      if(this.$store.getters.getPressedButton == 'z') {
        return 'attacking'
      }
      return 'stand'
    },
  }
}
</script>

<style lang="scss">
  .player {
    position: absolute;
    display: flex;
  }
</style>