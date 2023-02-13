<template>
  <div 
    class="overlay"
    ref="overlay"
    tabindex="0"
    @keydown="pressing" @keyup="stopPressing"
  ></div>
</template>

<script>
export default {
  name: 'command-overlay',
  mounted(){
    this.$refs.overlay.focus()
  },

  data(){
    return {
      pressedBtn: this.$store.getters.getPressedButton,
      debouncer: {
        start: null,
        timeOut: null
      },
    }
  },
  methods:{
    pressing(event){
      if(event.key !== 'Tab'){

        // console.log(this.getDebouncerTimeLeft())

        // if(this.getDebouncerTimeLeft() <= 0 ) {
        //   this.debouncer.start = Date.now()
  
        //   this.$store.commit('setPressedButton', event.key)

        //   return
        // }

        this.debouncer.start = Date.now()

        this.$store.commit('setPressedButton', event.key.toLowerCase() )

      }
    },
    stopPressing(){
      this.$store.commit('setPressedButton', '')
    },
    getDebouncerTimeLeft() {
      let elapsed = Date.now() - this.debouncer.start
      return (300 - elapsed) / 1000;
    }
  }
}
</script>

<style>

</style>