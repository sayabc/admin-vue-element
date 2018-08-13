<template>
  <div :class="['root_contailer', rootEleClass]">
    <sidebar class="sidebar_container" />
    <div class="main_container">
      <navbar />
      <main-part />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { Navbar, Sidebar, MainPart } from './components';

export default {
  name: 'layout',
  components: {
    Sidebar,
    Navbar,
    MainPart,
  },
  computed: {
    ...mapGetters([
      'sidebar',
    ]),
    rootEleClass() {
      return {
        root_hide_slidebar: !this.sidebar.open,
      }
    }
  }
}
</script>

