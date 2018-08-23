<template>

  <section class="main_part" style="clear: both">
    <!--
      这部分使用参考 官方文档 https://router.vuejs.org/zh/api/#router-view
      <transition>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
     -->
    <transition name="fade-transform" mode="out-in">
      <!-- keep-alive 内置组件，能在组件切换过程中将状态保留在内存中，防止重复渲染DOM。
          <keep-alive> 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。和 <transition> 相似，<keep-alive> 是一个抽象组件：它自身不会渲染一个 DOM 元素，也不会出现在父组件链中。
       -->
      <!-- <keep-alive :include="cachedViews">
        <router-view :key="key"></router-view>
      </keep-alive> -->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>

    </transition>
  </section>
</template>

<script>

export default {
  data() {
    return {

    }
  },
  methods: {

  },
  computed: {
    // key() {
    //   return this.$route.fullPath;
    // }
  },
}
</script>

<style scoped>
.main_part {
  overflow: hidden;
  padding: 20px;
}
</style>
