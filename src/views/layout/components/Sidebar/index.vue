<template>
  <div>
    <el-scrollbar class="scrollbar-wrapper" >
      <el-menu
        mode="vertical"
        :show-timeout="200"
        background-color="#304156"
        text-color="#bfcbd9"
        active-text-color="#409EFF"
      >
        <!--  :default-active="$route.path"   :collapse="isCollapse"    -->
        <sidebar-items />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import SidebarItems from "./SidebarItems";

export default {
  components: {
    SidebarItems
  }
};
</script>

