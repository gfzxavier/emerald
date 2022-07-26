<template>
  <router-view></router-view>
  <div class="overlay" ref="overlay" tabindex="0" @keydown="pressing" @keyup="stopPressing"></div>
</template>

<script>
export default {
  name: 'App',
  mounted(){
    this.$refs.overlay.focus()
  },
  methods:{
    pressing(event){
      if(event.key !== 'Tab'){
        this.$store.commit('setPressedButton', event.key)
      }
    },
    stopPressing(){
      this.$store.commit('setPressedButton', '')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.overlay{
  background: transparent;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  outline: none;
}
</style>
