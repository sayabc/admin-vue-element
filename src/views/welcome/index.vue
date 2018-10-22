<template>
  <div id="welcome_root">
    <Login v-if="enterSiteStyle === 'login_style'" />
    <Register v-else/>
  </div>
</template>

<script>
import Login from './components/login';
import Register from './components/register';

import { mapGetters } from 'vuex';

export default {
  components: {
    Login,
    Register
  },
  computed: {
    ...mapGetters([
      'enterSiteStyle'
    ])
  },
}
</script>

<style lang="scss" scoped>
#welcome_root {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: #2d3a5b;
}
</style>

