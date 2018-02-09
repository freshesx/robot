<template>
  <div class="rt-dashboard-mixin">
    <el-container>
      <el-aside class="rt-dashboard-mixin-aside" width="200px">
        <!-- 侧边栏元素 -->
        <private-aside :menu="menu" :collapse="menuCollapse"></private-aside>
      </el-aside>
      <el-container>
        <!-- <el-header>Header</el-header> -->
        <el-main>
          <router-view />
        </el-main>
        <!-- <el-footer>Footer</el-footer> -->
      </el-container>
    </el-container>
  </div>
</template>

<script>
import PrivateAside from './_aside.vue'

let menuId = 1

export default {
  name: 'RtDashboardMixin',
  components: {
    PrivateAside
  },
  computed: {
    /**
     * @public
     */
    menu () {
      return [
        {
          id: this.menuNextId(),
          title: '首页',
          router: { name: 'homepage' },
          icon: 'el-icon-menu'
        },
        {
          id: this.menuNextId(),
          title: '产品模块',
          icon: 'el-icon-tickets',
          children: [
            {
              id: this.menuNextId(),
              title: '产品列表',
              router: { name: 'products' }
            }
          ]
        },
        {
          id: this.menuNextId(),
          title: '用户模块',
          router: { name: 'homepage' },
          icon: 'el-icon-setting'
        }
      ]
    },
    menuCollapse () {
      return true
    }
  },
  methods: {
    menuNextId () {
      return menuId++
    }
  }
}
</script>

<style lang="scss">
.rt-dashboard-mixin {
  width: 100vw;
  height: 100vh;
  display: flex;
  background: #f0f2f5;
}

.rt-dashboard-mixin-aside {
  display: flex;
  flex-direction: column;
}
</style>
