<template>
  <div class="config">
    <CommandOverlay />
    <Soundtrack />
  </div>
</template>

<script>
import CommandOverlay from './CommandOverlay.vue'
import Soundtrack from './Soundtrack.vue'

export default {
  name: 'Config',
  components: {
    CommandOverlay,
    Soundtrack
  }
}
</script>
