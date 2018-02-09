<template>
  <div class="rt-dashboard-aside">
    <div class="rt-dashboard-aside-brand">
      ROBOT
    </div>
    <div class="rt-dashboard-aside-navbar">
      <private-menu :menu="menu" :collapse="collapse" />
    </div>
  </div>
</template>

<script>
import PrivateMenu from './_menu.js'

export default {
  props: {
    menu: {
      type: Array,
      default: () => []
    },
    collapse: {
      type: Boolean,
      default: false
    }
  },
  components: {
    PrivateMenu
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
