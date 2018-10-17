<template>
  <el-menu class="navbar" mode="horizontal">
    <hamburger class="hamburger_container pointer" :toggleClick="toggleSideBar" :isActive="sidebar.open"></hamburger>
    <NavList />
    <breadcrumb class="breadcrumb_container"></breadcrumb>
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex';
import Hamburger from '@/components/Hamburger';
import Breadcrumb from '@/components/Breadcrumb';
import NavList from '@/components/NavList';

export default {
  components: {
    Hamburger,
    Breadcrumb,
    NavList,
  },
  computed: {
    ...mapGetters([
      'sidebar',
    ])
  },
  methods: {
    toggleSideBar() {
      // 点击收放左侧 SideBar
      this.$store.dispatch('toggleSidebar') // 触发 global.js 的 actions
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  .hamburger_container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
    font-size: 16px;
  }
  .breadcrumb_container {
    line-height: 50px;
    font-size: 16px;
    margin-left: 14px;
  }
  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }
  .right-menu {
    float: right;
    height: 100%;
    &:focus{
     outline: none;
    }
    .right-menu-item {
      display: inline-block;
      margin: 0 8px;
    }
    .screenfull {
      height: 20px;
    }
    .international{
      vertical-align: top;
    }
    .theme-switch {
      vertical-align: 15px;
    }
    .avatar-container {
      height: 50px;
      margin-right: 30px;
      .avatar-wrapper {
        cursor: pointer;
        margin-top: 5px;
        position: relative;
        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }
        .el-icon-caret-bottom {
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>

