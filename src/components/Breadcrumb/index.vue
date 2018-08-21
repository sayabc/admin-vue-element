<template>
<div>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item, ind) in breadCrumbList.children" :key="ind" :to="{ path: item.path}" >
      {{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</div>

</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {

    }
  },
  watch: {
    // $route() {
    //   this.resetNavList()
    //   console.log(this.$route)
    // }
  },
  methods: {
    // resetNavList() {
    //   this.list = this.$route.matched.filter(item => item.name);
    // }
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    breadCrumbList() {
      return [this.sidebar.showList][0]
    }
  }
}
</script>

