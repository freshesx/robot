<template>
  <div class="rx-nav-item" :class="{ [`is-level-${level}`]: true }" @click="push(item)">
    <div class="rx-nav-link">
      {{ item.title }}
    </div>
    <rx-nav-item
      :item="route"
      :level="level + 1"
      v-for="(route, key) in item.children" :key="key"
      v-if="item.children"
    />
  </div>
</template>

<script>
import { SessionRouter } from '../router'

export default {
  name: 'rx-nav-item',
  props: {
    item: {
      type: Object,
      default: () => ({})
    },
    level: {
      type: Number,
      default: 0
    }
  },
  methods: {
    push (item) {
      if (item.name) {
        SessionRouter.push({ name: item.name })
      }
    }
  }
}
</script>

<style lang="scss">
.rx-nav-link {
  cursor: pointer;
}

.rx-nav-item.is-level-1 {
  .rx-nav-link {
    padding-left: 1rem;
  }
}
</style>

