<template>
  <div class="nav_container">
    <div class="nav_left">
      <el-tabs @tab-click="handleClick">
        <el-tab-pane
          v-for="(item, index) in routersMap"
          :key="index"
          :label="item.meta.title"
          :name="item.meta.title"
        />
      </el-tabs>
    </div>
    <div class="shortcut_entrance">
      <el-dropdown class="fr">
        <span class="el-dropdown-link">
          个人中心<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>项目地址</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <div class="fr el-dropdown">
        全屏
      </div>
      <div class="fr el-dropdown">
        多语言切换
      </div>
    </div>
  </div>
</template>

<script>
import { routersMap } from "@/router/index";

export default {
  data() {
    return {
      routersMap: routersMap
    };
  },
  methods: {
    handleClick(tab, event) {
      // 点击通知 getters 去处理 sidebar的显示元素列表  同时应该默认显示该项目下的首页或某一页
      this.$store.dispatch("handleSidebarList", tab.name);
    }
  }
};
</script>

<style lang="scss" scoped>
// element-ui
.el-dropdown {
  margin-right: 20px;
  cursor: pointer;
}
.nav_container {
  margin-left: 40px;
}
.nav_left {
  float: left;
  width: 60%;
}
.shortcut_entrance {
  float: left;
  width: 40%;
}

</style>

