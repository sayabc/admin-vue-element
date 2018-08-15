<template>
  <div class="sidebar_item" v-if="item.children">
    <!-- 如果该条item没有子元素 -->
    <router-link v-if="hasOneChild(item.children)" :to="item.children[0].path">
      <el-menu-item :index="item.children[0].path">
        <!-- <svg-icon :icon-class="dashboard"></svg-icon> -->
        <span>{{ item.children[0].name }}</span>
      </el-menu-item>
    </router-link>
    <!-- 该条 item 有二级菜单 -->
  </div>
</template>

<script>
export default {
  props: ['item'],
  methods: {
    hasOneChild(ic) {
      return true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>



