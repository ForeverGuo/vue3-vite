<template>
  <div class="element-nav">
    <el-menu
      :uniqueOpened="true"
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <!-- <div></div> -->
      <el-sub-menu
        v-for="(item, index) in menuList"
        :key="index"
        :index="item.name"
        :class="activeName === item.name ? 'active' : ''"
        @click="menuClick(item)"
      >
        <template #title>
          <!-- <i :class="item.icon"></i> -->
          <el-icon>
              <component :is="item.icon" />
            </el-icon>
          <span>{{ item.desc }}</span>
        </template>
        <el-menu-item
          v-for="(item1, index1) in item.children"
          :key="index1"
          :index="item1.name"
          :class="activeChild === item1.name ? 'active_child' : ''"
          @click="menuClick(item)"
        >
          <template #title>
            <!-- <i :class="item1.icon"></i> -->
            <el-icon>
              <component :is="item1.icon" />
            </el-icon>
            <span>{{ item1.desc }}</span>
          </template>
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'LayoutNav',
  data() {
    return {
      menuList: [],
      activeName: '',
      activeChild: ''
    }
  },
  watch: {
    $route: {
      handler(val) {
        if (val.name) {
          // console.log(this.activeChild, val.name)
          this.activeChild = val.name
          this.$nextTick(() => {
            this.findFatherName()
          })
        }
      },
      deep: true,
      immediate: true
    }
  },
  created() {
    console.log(this.$router.options.routes)
    this.$router.options.routes.forEach((item) => {
      if (item.isElementPlus) {
        this.menuList = item.children
      }
    })
    // console.log(this.menuList)
    let currentRouteName = this.$router.currentRoute.value.name
    // console.log(currentRouteName)
    this.activeName = currentRouteName
  },
  mounted() {},
  methods: {
    // 查找一级菜单名称(激活一级菜单)
    findFatherName() {
      let currentRouteName = this.$router.currentRoute.value.name
      this.menuList.find((item) => {
        if (item.children && item.children.length > 0) {
          item.children.find((child) => {
            if (child.name === currentRouteName) {
              this.activeName = item.name
            }
          })
        } else {
          if (item.name === currentRouteName) {
            this.activeName = item.name
          }
        }
      })
    },
    menuClick(item) {
      this.activeName = item.name
    },
    handleOpen(key) {
      // console.log(key, keyPath)
      if (key) {
        this.$router.push({ name: key })
      }
    },
    handleClose(key) {
      if (key) {
        this.$router.push({ name: key })
      }
    }
  }
}
</script>

<style lang="scss">
.element-nav {
  background: #103050;
  height: calc(100vh - 84px);
  overflow: auto;
  .el-menu {
    .el-sub-menu {
      .el-sub-menu__title {
        padding: 0 38px;
        text-align: left;
        color: #fff !important;
        background: #103050 !important;
        height: 60px;
        line-height: 60px;
        font-size: 15px;
        display: flex;
        i {
          //padding-left: 36px;
        }
        span {
          margin: 0 10px;
        }
        .iconfont {
          margin-left: 38px;
          color: #2f71f5;
          // margin: 0 10px;
        }
        .el-sub-menu__icon-arrow {
          display: none;
        }
      }
    }
    .active {
      .el-sub-menu__title {
        background: #1381f0 !important;
        .iconfont {
          color: #fff;
        }
      }
    }
    .active_child {
      background: #f1853d !important;
      .iconfont {
        color: #fff;
      }
    }
  }
}
</style>