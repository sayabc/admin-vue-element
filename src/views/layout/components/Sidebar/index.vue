<template>
  <div>
    <el-scrollbar class="scrollbar-wrapper" >
      <el-menu
        mode="vertical"
        :show-timeout="200"
        background-color="#304156"
        text-color="#bfcbd9"
        active-text-color="#409EFF"
        :collapse="isCollapse"
      >
        <!--  :default-active="$route.path"      -->
        <sidebar-items v-for="item in showList" :key="item.meta.title" :item='item'/>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItems from "./SidebarItems";

export default {
  components: {
    SidebarItems,
  },
  computed: {
    ...mapGetters([
      'sidebar',
    ]),
    isCollapse() {
      return !this.sidebar.open;
    },
    showList() {
      // 更新下路由 和 sidebar list
      let curShowList = [this.sidebar.showList]
      this.$router.push(curShowList[0].children[0].path)
      return curShowList;
    }
  },
};
</script>
