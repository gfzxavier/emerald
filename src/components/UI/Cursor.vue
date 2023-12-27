<template>
  <img src="../../assets/img/cursor.png" class="cursor">
</template>

<script>
export default {
  name: 'Cursor'
}
</script>

<style lang="scss" scoped>
@keyframes moving-cursor {
  0% {
    margin-right: 0px;
  }
  50% {
    margin-right: 15px;
  }
  100% {
    margin-right: 0px;
  }
}
.cursor {
  height: 50px;
  transform: rotate(45deg);
  animation: moving-cursor 1s ease-in-out infinite;
}
</style>