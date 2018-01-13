<template>
  <div class="rx-pages">
    <div class="rx-pages-tab"
      :class="{
        'is-active': key === activeTabIndex
      }"
      :key="key"
      v-for="(tab, key) in sessionTabs"
    >
      {{ tab.title }}
      <div class="rx-pages-btns">
        <button class="rx-pages-btn">C</button>
        <button class="rx-pages-btn">X</button>
      </div>
    </div>
    <div
      class="rx-pages-tab is-plus"
      @click="newSessionTab"
    >+</div>
  </div>
</template>

<script>
import { get } from 'lodash'

export default {
  name: 'RxPages',
  computed: {
    sessionTabs () {
      if (!this.$store.state.robotxStore) {
        throw new Error('The robotx store isn\'t used in store.')
      }
      return this.$store.state.robotxStore.sessionTabs || []
    },
    activeTabIndex () {
      return this.$store.state.robotxStore.activeTabIndex
    }
  },
  methods: {
    newSessionTab () {
      const route = this.$router.resolve({ name: 'homepage' })
      const title = get(route, 'resolved.meta.title', 'untitle')

      this.$store.dispatch('rxNewSessionTab', {
        title,
        name: 'homepage'
      })
    }
  }
}
</script>

<style lang="scss">
.rx-pages {
  display: flex;
}

.rx-pages-tab {
  position: relative;
  flex: 1;
  background: rgba(black, 0.2);
  text-align: center;
  cursor: pointer;

  &.is-active {
    background: rgba(black, 0.5);
  }

  & + & {
    border-left: solid 1px rgba(black, 0.3);
  }
}

.rx-pages-tab.is-plus {
  flex: none;
  width: 30px;
}

.rx-pages-btns {
  position: absolute;
  display: none;
  top: 0;
  right: 0;
}

button.rx-pages-btn {
  display: block;
  $radius: 20px;
  background: #fff;
  border: none;
  width: $radius;
  height: $radius;
  line-height: 1;
  text-align: center;
  padding: 0;
  margin: 0;
  border-radius: $radius;
  cursor: pointer;

  & + & {
    margin-left: 0.25rem;
  }
}

.rx-pages-tab:hover {
  .rx-pages-btns {
    display: flex;
  }
}
</style>
