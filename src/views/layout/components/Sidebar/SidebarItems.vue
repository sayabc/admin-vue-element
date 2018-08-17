<template>
  <div class="sidebar_item" v-if="item.children">
    <!-- 如果该条item没有子元素 -->
    <router-link v-if="hasOnlyOneChild(item.children)" :to="children[0].path">
      <el-menu-item :index="children[0].path" class="submenu_title_noDropdown">
        <i :class="'el-icon-'+children[0].meta.icon"></i>
        <span slot="title">{{ children[0].name }}</span>
      </el-menu-item>
    </router-link>
    <!-- 该条 item 有二级菜单 -->
    <router-link v-else v-for="(mulItem,index) in children" :key="index" :to="mulItem.path">
      <el-menu-item :index="mulItem.path||mulItem.meta.title">
        <i :class="'el-icon-'+mulItem.meta.icon"></i>
        <span slot="title">{{ mulItem.name }}</span>
      </el-menu-item>
    </router-link>


  </div>
</template>

<script>
export default {
  props: ['item', 'collapse'],
  data() {
    return {
       isCollapse: true,
       children: null
    }
  },
  methods: {
    hasOnlyOneChild(ic) {
      this.children = ic
      if (ic.length === 1) {
        return true
      } else {
        return false
      }
    },

  }
}
</script>

<style lang="scss" scoped>

</style>



