<template>
  <div class="nav_container">
    导航列表
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [{
        title: 'Document',
        linkTo: 'baidu',
      }, {
        title: 'Workspace',
        linkTo: 'sina',
      }]
    }
  },
  watch: {
    $route() {
      this.resetNavList()
    }
  },
  methods: {
    resetNavList() {
      let list = this.$route.matched.filter(item => item.name)

    }
  }
}
</script>

