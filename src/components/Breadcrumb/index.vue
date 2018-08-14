<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item, ind) in navList" :key="ind" :to="{ path: '/test' }">
      <router-link :to="item.linkTo">{{ item.title }}</router-link>
    </el-breadcrumb-item>
  </el-breadcrumb>
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

