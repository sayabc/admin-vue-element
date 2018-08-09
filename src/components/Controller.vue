<template>
  <div class="component_contaiiner">
    <AddressList v-if="curComponent === 'AddressList'" />
    <Test v-if="curComponent === 'Test'"/>
    <Dashboard v-if="curComponent === 'Dashboard'"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import AddressList from './AddressList';
import Test from './Test';
import Dashboard from './Dashboard';

export default {
  // props: ['curComponent'],
  data() {
    return {

    }
  },
  components: {
    AddressList,
    Test,
    Dashboard,
  },
  mounted() {

  },
  computed: {
    ...mapState({
      curComponent: state => state.curComponent
    })
  }
}
</script>

<style scoped>

</style>

