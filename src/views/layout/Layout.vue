<template>
  <div class="root-contailer">
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <navbar />
      <main-part />
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, MainPart } from './components'

export default {
  name: 'layout',
  components: {
    Sidebar,
    Navbar,
    MainPart
  }
}
</script>

