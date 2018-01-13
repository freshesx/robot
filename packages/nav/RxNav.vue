<template>
  <div class="rx-nav">
    <h1>rx-nav-bar</h1>
    <div class="rx-nav-items">
      <rx-nav-item
        :item="route"
        v-for="(route, key) in routes" :key="key"
      />
    </div>
  </div>
</template>

<script>
import RxNavItem from './RxNavItem'

export default {
  name: 'RxNav',
  components: {
    RxNavItem
  },
  props: {
    routes: {
      type: Array,
      default: () => []
    }
  }
}
</script>
