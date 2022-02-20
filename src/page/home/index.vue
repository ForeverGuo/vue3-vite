<template>
  <div class="element-index">
    <layout-header :title="title"></layout-header>
    <div class="flex">
      <div class="left">
        <layout-nav></layout-nav>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import LayoutNav from '@/components/LayoutNav.vue'
import LayoutHeader from '@/components/LayoutHeader.vue'
export default {
  name: '用户管理平台',
  components: {
    LayoutNav,
    LayoutHeader
  },
  data() {
    return {
      title: '用户管理平台'
    }
  }
}
</script>

<style lang="scss">
.element-index {
  .flex {
    .left {
      width: 200px;
      min-width: 200px;
    }
    .right {
      flex: 1;
      height: calc(100vh - 84px);
      overflow: auto;
    }
  }
}
</style>
