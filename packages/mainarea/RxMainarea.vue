<template>
  <div class="rx-mainarea">
    <div class="rx-mainarea-panel"
      v-for="(tab, key) in sessionTabs"
      :key="key"
    >
      <component :is="dynamicComponents[key]" v-if="key === activeTabIndex"/>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import SessionRouter from '../router/SessionRouter'

export default {
  name: 'rx-mainarea',
  data () {
    return {
      dynamicComponents: [
      ]
    }
  },
  computed: {
    sessionTabs () {
      if (!this.$store.state.robotxStore) {
        throw new Error('The robotx store isn\'t used in store.')
      }
      return this.$store.state.robotxStore.sessionTabs || []
    },
    activeTabIndex () {
      return this.$store.state.robotxStore.activeTabIndex
    },
    activeTab () {
      return this.sessionTabs[this.activeTabIndex]
    }
  },
  methods: {
    mountComponent () {
      // Find component
      const route = SessionRouter.find(this.activeTab.name)
      // Build component name
      const componentName = `session-route-${route.name}`
      // Mount component
      Vue.component(`session-route-${route.name}`, route.component)
      // Set dynamicComponents
      Vue.set(this.dynamicComponents, this.activeTabIndex, componentName)
    }
  },
  watch: {
    activeTab () {
      this.mountComponent()
    }
  },
  mounted () {
    this.mountComponent()
  }
}
</script>
