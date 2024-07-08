<template>
  <div
    class="overlay"
    ref="overlay"
    tabindex="0"
    @keydown="pressing"
    @keyup="stopPressing"
  ></div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'command-overlay',
  mounted() {
    this.$refs.overlay.focus()
  },
  methods: {
    ...mapActions('Config', ['pressing', 'stopPressing'])
  }
}
</script>

<style>
.overlay {
  /* background: red; */
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  /* outline: none; */
}
</style>
