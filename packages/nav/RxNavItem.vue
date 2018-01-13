<template>
  <div class="rx-nav-item">
    {{ item.meta.title }}
    <rx-nav-item
      :item="route"
      v-for="(route, key) in filterNavRoutes(item.children)" :key="key"
    />
  </div>
</template>

<script>
import { filterNavRoutes } from './helpers'

export default {
  name: 'rx-nav-item',
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    filterNavRoutes
  }
}
</script>
