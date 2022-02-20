<template>
  <div class="header-nav">
    <div class="left">{{ title }}</div>
    <div class="right">
      <el-dropdown>
        <span class="el-dropdown-link">
          <span>admin</span>
          <el-icon class="el-icon--right"><arrow-down /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <el-icon class="el-icon--right"><warning /></el-icon>
              <span>退出</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import router from '@/router/router'
export default {
  name: 'LayoutHeader',
  props: {
    title: {
      type: String,
      require: true
    }
  },
  methods: {
    toHome() {
      router.push({ name: 'Home' })
    }
  }
}
</script>

<style lang="scss">
.header-nav {
  display: flex;
  height: 84px;
  line-height: 84px;
  background: #2f71f5;
  .left {
    background: #2f71f5;
    min-width: 300px;
    width: 300px;
    color: #fff;
    font-size: 24px;
  }
  .right {
    flex-grow: 1;
    align-items: center;
    display: flex;
    justify-content: flex-end;
    margin-right: 30px;
    img {
      margin-right: 20px;
    }
    .el-dropdown-link {
      font-size: 18px;
      color: #fff;
      display: flex;
    }
  }
}
</style>
