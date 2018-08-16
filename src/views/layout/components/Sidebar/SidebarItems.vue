<template>
  <div class="sidebar_item" v-if="item.children">
    <!-- 如果该条item没有子元素 -->
    <router-link v-if="hasOnlyOneChild(item.children)" :to="item.children[0].path">
      <el-menu-item :index="item.children[0].path" class="submenu_title_noDropdown">
        <!-- <svg-icon :icon-class="dashboard"></svg-icon> -->
        <i :class="'el-icon-'+item.children[0].meta.icon"></i>
        <span slot="title">{{ item.children[0].name }}</span>
      </el-menu-item>
    </router-link>
    <!-- 该条 item 有二级菜单 -->
    <!-- <router-link v-else></router-link> -->


  </div>
</template>

<script>
export default {
  props: ['item', 'collapse'],
  data() {
    return {
       isCollapse: true
    }
  },
  methods: {
    hasOnlyOneChild(ic) {
      if (ic.length === 1) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>



