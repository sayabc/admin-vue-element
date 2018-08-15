<template>
  <div class="sidebar_item" v-if="item.children">
    <!-- 如果该条item没有子元素 -->
    <router-link v-if="hasOneChild(item.children)" :to="item.children[0].path">
      {{ item.children[0].name }}
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


