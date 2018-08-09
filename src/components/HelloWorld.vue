<template>
  <div class="allContainer">
    <el-container>
      <el-aside :style="{width: asideBigWidth?'200px':'50px'}">
        <!-- <el-menu :default-openeds="['1', '3']"> -->
        <el-menu>
          <el-submenu v-for="(item, index) in menuList" :key="index" :index="(index+1).toString()" style="text-align: left;"
              @click="handleComponent">
            <template slot="title"><i :class="'el-icon-'+item.iconClass"></i>{{item.title}}</template>
            <el-menu-item-group v-if="item.hasChildren">
              <el-menu-item v-for="(it,ind) in item.children" :key="it.name+ind" :index="index+'-'+ind">{{it.name}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>Dashboard</template>
            <el-menu-item-group>
              <el-menu-item index="1-1">Dashboard1</el-menu-item>
              <el-menu-item index="1-2">Dashboard2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>Charts</template>
            <el-menu-item-group>
              <el-menu-item index="2-1">Charts1</el-menu-item>
              <el-menu-item index="2-2">Charts2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>Documents</template>
            <el-menu-item-group>
              <el-menu-item index="3-1">Documents1</el-menu-item>
              <el-menu-item index="3-2">Documents2</el-menu-item>
            </el-menu-item-group>
          </el-submenu> -->
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="font-size: 12px; overflow: hidden;">
          <div style="float: left;">
            <!-- <div @click="handleSide"><i class="el-icon-menu" style="cursor: pointer;"></i> Dashboard -->
              <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">Dashboard</el-breadcrumb-item>
                <el-breadcrumb-item>Charts</el-breadcrumb-item>
                <el-breadcrumb-item>Documents</el-breadcrumb-item>
              </el-breadcrumb>
            <!-- </div> -->
          </div>
          <div style="float: right;">
            <el-dropdown>
              <i class="el-icon-setting" style="margin-right: 15px"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item> <a href="https://github.com/sayabc/vue-admin" target="_blank">Github</a></el-dropdown-item>
                <el-dropdown-item>Log Out</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <span>eyea</span>
          </div>
        </el-header>

        <!-- main主体部分 -->

        <!-- <Controller
          :curComponent='curComponent'  改为store存储
        /> -->
        <Controller />

      </el-container>
    </el-container>
  </div>
</template>

<script>
import echarts from 'echarts';
import Controller from './Controller'

export default {
  data() {
    const menuList = [{
      title: 'Dashboard',
      iconClass: 'menu',
      hasChildren: false,
      children: [{
        name: '',
        link: ''
      }]
    }, {
      title: 'Documents',
      iconClass: 'message',
      hasChildren: true,
      children: [{
        name: 'Documents1',
        link: ''
      }, {
        name: 'Documents2',
        link: ''
      }]
    }, {
      title: 'Charts',
      iconClass: 'setting',
      hasChildren: true,
      children: [{
        name: 'Charts1',
        link: ''
      }, {
        name: 'Charts2',
        link: ''
      }]
    }]
    return {
      asideBigWidth: true,
      menuList,
      curComponent: 'AddressList', // 当前组件
    };
  },
  components: {
    Controller,
  },
  methods: {
    handleSide() {
      this.asideBigWidth = !this.asideBigWidth;
    },
    handleComponent() {
      console.log('this')
      // this.$store.commit('HANDLE_CUR_COMPONENT', 'Test') // 同步更改组件
    },
    handleUrl(url) {
      window.open(url)
    }
  },
  mounted() {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.allContainer {
  border: 1px solid #b3c0d1;
  box-sizing: border-box;
  height: 100vh;
}
.el-container {
  height: 100%;
}
.el-header {
  /* background-color: #b3c0d1; */
  color: #333;
  line-height: 60px;
  border-bottom: 1px solid #b3c0d1;
}
.el-breadcrumb {
  line-height: inherit;
}
.el-aside {
  color: #333;
  border: 1px solid #b3c0d1;
}
</style>
