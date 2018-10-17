<template>
  <div class="bread-container">
    <!-- <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item, ind) in breadCrumbList.children" :key="ind" :to="{ path: item.path}" >
        {{ item.meta.title}}
      </el-breadcrumb-item>
    </el-breadcrumb> -->
    {{ curName }}
  </div>

</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      curName: this.$route.name
    }
  },
  // computed: {
  //   ...mapGetters([
  //     'sidebar'
  //   ]),
  //   breadCrumbList() {
  //     console.log('watch sidebar', [this.sidebar.showList][0])
  //     return [this.sidebar.showList][0]
  //   },
  // },
  watch: {
    $route: function(cur) {
      this.curName = cur.name
    },
  }
}
</script>

<style lang="scss" scoped>
.bread_container {
  color: #606266;
  font-size: 18px;
}
</style>


