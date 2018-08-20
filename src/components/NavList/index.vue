<template>
  <div class="nav_container">
    <el-tabs @tab-click="handleClick">
      <el-tab-pane
        v-for="(item, index) in navList"
        :key="index"
        :label="item.title"
        :name="item.title" />
    </el-tabs>
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
      }],
      activeName: 'second'
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

    },
    handleClick() {

    }
  }
}
</script>

<style lang="scss" scoped>
.nav_container {
  margin-left: 40px;
  .el-tabs {
    .el-tabs__header {
      overflow: hidden;
      margin-bottom: 0px !important;
      border: 1px solid red;
    }
  }
}
</style>

