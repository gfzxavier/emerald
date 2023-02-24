<template>
  <div class="knight">
    <div v-if="action === 'stand'" class="knight__block knight__block--stand">
      <img src="../../assets/characters/knight/_Idle.png" class="knight__stand">
    </div>
    <div v-if="action === 'running'" class="knight__block knight__block--running">
      <img src="../../assets/characters/knight/_Run.png" class="knight__running">
    </div>
    <div v-if="action === 'attacking'" class="knight__block knight__block--attacking">
      <img src="../../assets/characters/knight/_Attack.png" class="knight__attacking">
    </div>
  </div>
</template>

<script>
export default {
  name: 'knight',
  props: {
    action: {
      type: String,
      default: 'stand'
    }
  }
}
</script>

<style lang="scss">

@keyframes animate {
  from {
    transform: translate3d(0px,0,0);
  }
  to {
    transform: translate3d(-100%,0,0);
  }
}

.knight{

  $character-size: 500px;

  // background-color: blue;

  &__block {

    height: 268px;

    &--stand {
      border: 2px solid greenyellow;
      width: 131px;
      overflow: hidden;

      img {
        position: relative;
        top: -232px;
        left: -275px;
        animation: animate 1s steps(10) infinite;
        height: $character-size;
        image-rendering: pixelated;
      }
    }

    &--running {
      border:2px solid yellow;
      width: 168px;
      overflow: hidden;

      img {
        position: relative;
        top: -232px;
        left: -275px;
        animation: animate .55s steps(10) infinite;
        height: $character-size;
        image-rendering: pixelated;
      }
    }

    &--attacking {
      border:2px solid purple;
      width: 438px;
      overflow: hidden;

      img {
        position: relative;
        top: -232px;
        left: -300px;
        animation: animate .18s steps(4) infinite;
        height: $character-size;
        image-rendering: pixelated;
      }
    }
  }
}
</style>