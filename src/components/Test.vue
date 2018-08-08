<template>
  <h1 class="title">
    {{ title }}
  </h1>
</template>

<script>
export default {
  data() {
    return {
      title: 'hi, test component'
    }
  }
}
</script>

<style scoped>
  .title {
    color: darkgrey;
  }
</style>

