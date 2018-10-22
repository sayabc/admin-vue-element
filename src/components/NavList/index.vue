<template>
  <div class="nav_container">
    <!-- <div class="nav_left">
      <el-tabs @tab-click="handleClick">
        <el-tab-pane
          v-for="(item, index) in routersMap"
          :key="index"
          :label="item.meta.title"
          :name="item.meta.title"
        />
      </el-tabs>
    </div> -->
    <div class="shortcut_entrance fr">
      <el-dropdown class="fr">
        <span class="el-dropdown-link">
          个人中心<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <a href="https://github.com/sayabc/admin-vue-element" target="_blank">项目地址</a>
          </el-dropdown-item>
          <el-dropdown-item>
            <p @click="handleExit">
              退出登录
            </p>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <div class="fr el-dropdown" @click="handleFullScreen">
        {{ isFullScreen ? '退出全屏/ESC' : '全屏'}}
      </div>
      <div class="fr el-dropdown">
        多语言切换
      </div>
    </div>
  </div>
</template>

<script>
// import { routersMap } from "@/router/index";

export default {
  data() {
    return {
      // routersMap: routersMap
      isFullScreen: false
    };
  },
  methods: {
    // handleClick(tab, event) {
    //   // 点击通知 getters 去处理 sidebar的显示元素列表  同时应该默认显示该项目下的首页或某一页
    //   this.$store.dispatch("handleSidebarList", tab.name);
    // }
    exitFullScreen: function() {

    },
    enterFullScreen: function() {

    },
    handleFullScreen: function() {
      let ele = document.getElementById('app')
      this.isFullScreen = !this.isFullScreen

      let enterFullScreen   = ele.requestFullScreen
                        || ele.webkitRequestFullScreen //谷歌
                        || ele.mozRequestFullScreen  //火狐
                        || ele.msRequestFullScreen; //IE11

      let exitFullScreen = document.exitFullscreen || //W3C
                       document.mozCancelFullScreen || //Chrome等
                       document.webkitExitFullscreen || //FireFox
                       document.webkitExitFullscreen; //IE11

      let requestMethod = this.isFullScreen ? enterFullScreen : exitFullScreen
      let callEle = this.isFullScreen ? ele : document

      if (requestMethod) {
        requestMethod.call(callEle)
      } else if (typeof window.ActiveXObject !== "undefined") {
        let wscript = new ActiveXObject("WScript.Shell");
        if (wscript) {
          wscript.SendKeys("{F11}");
        }
      }
    },
    handleExit: function() {
      alert('清空登录信息，返回登录页')
      this.$router.push('/login')
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
  width: 40%;
}

</style>

