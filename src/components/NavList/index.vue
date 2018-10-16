<template>
  <div class="nav_container">
    <el-tabs @tab-click="handleClick">
      <el-tab-pane
        v-for="(item, index) in routersMap"
        :key="index"
        :label="item.meta.title"
        :name="item.meta.title" />
      </el-tabs>
  </div>
</template>

<script>
import { routersMap } from '@/router/index';

export default {
  data() {
    return {
      routersMap: routersMap,
    }
  },
  methods: {
    handleClick(tab, event) { // 点击通知 getters 去处理 sidebar的显示元素列表  同时应该默认显示该项目下的首页或某一页
      this.$store.dispatch('handleSidebarList', tab.name)
      this.$store.dispatch('handleSidebarListShowFirstChild') // 似乎可以去掉
    }
  },
}
</script>

<style lang="scss" scoped>
.nav_container {
  margin-left: 40px;
}
</style>

