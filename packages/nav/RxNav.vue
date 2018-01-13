<template>
  <div class="rx-nav">
    <h1>rx-nav-bar</h1>
    <div class="rx-nav-items">
      <rx-nav-item
        :item="route"
        v-for="(route, key) in filterNavRoutes(routes)" :key="key"
      />
    </div>
  </div>
</template>

<script>
import RxNavItem from './RxNavItem'
import { filterNavRoutes } from './helpers'

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
  },
  methods: {
    filterNavRoutes
  }
}
</script>
