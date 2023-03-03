<template>
  <div class="soundtrack">
    <audio controls>
      <source :src="songUrl" type="audio/mpeg">
    </audio>
  </div>
</template>

<script>
export default {
  name: 'soundtrack',
  props: {
    song: {
      type: String,
      required: true
    }
  },
  computed: {
    songUrl(){
      return `local-audio://sound/${this.song}.mp3`
    }
  },
}
</script>

<style>

</style>