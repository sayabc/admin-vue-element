<template>
  <AddressList v-if="curCompoent === 'AddressList'" />
</template>

<script>
import AddressList from './AddressList'

export default {
  props: ['curCompoent'],
  data() {
    return {

    }
  },
  components: {
    AddressList,
  },
  mounted() {

  }
}
</script>

<style scoped>

</style>

