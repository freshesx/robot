<template>
  <div class="rt-dashboard-aside">
    <div class="rt-dashboard-aside-brand">
      ROBOT
    </div>
    <div class="rt-dashboard-aside-navbar">
      <el-menu
        default-active="1"
        background-color="transparent"
        text-color="#A6ADB4"
        active-text-color="#fff"
        unique-opened
      >
        <div
          :key="item.id"
          v-for="item in menu"
        >
          <el-menu-item :index="item.id.toString()" v-if="!item.children">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
          <el-submenu :index="item.id.toString()" v-if="item.children">
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{ item.title }}</span>
            </template>
            <el-menu-item
              :index="child.id.toString()"
              :key="child.id"
              v-for="child in item.children"
            >{{ child.title }}</el-menu-item>
          </el-submenu>
        </div>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menu: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss">
  .rt-dashboard-aside {
    flex: 1;
    background: #001529;
  }

  .rt-dashboard-aside-brand {
    color: #fff;
    height: 65px;
    background: #00284d;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
