<template>
  <div class="rx-layout">
    <div class="rx-layout-aside">
      <rx-nav-bar :routes="routes"/>
    </div>
    <div class="rx-layout-container">
      <div class="rx-layout-header"></div>
      <div class="rx-layout-main">
        <router-view></router-view>
      </div>
      <div class="rx-layout-footer"></div>
    </div>
  </div>
</template>

<script>
import { RxNavBar } from '../nav-bar'

export default {
  name: 'RxBoardMixin',
  components: {
    RxNavBar
  },
  data () {
    return {
      routes: []
    }
  }
}
</script>

<style lang="scss">
.rx-layout {
  display: flex;
  width: 100vw;
  height: 100vh;
}

.rx-layout-aside {
  width: 160px + 24px;
  height: 100vh;
  background: rgba(black, 0.2);
}

.rx-layout-container {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.rx-layout-main {
  flex: 1;
}

.rx-layout-header {
  flex-shrink: 0;
}

.rx-layout-footer {
  flex-shrink: 0;
}
</style>
