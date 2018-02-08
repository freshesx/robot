<template>
  <div class="rt-dashboard-mixin">
    <el-container>
      <el-aside class="rt-dashboard-mixin-aside" width="200px">
        <!-- 侧边栏元素 -->
        <private-aside></private-aside>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import PrivateAside from './_aside.vue'

export default {
  name: 'RtDashboardMixin',
  components: {
    PrivateAside
  }
}
</script>

<style lang="scss">
.rt-dashboard-mixin {
  width: 100vw;
  height: 100vh;
  display: flex;
}

.rt-dashboard-mixin-aside {
  display: flex;
  flex-direction: column;
}
</style>
