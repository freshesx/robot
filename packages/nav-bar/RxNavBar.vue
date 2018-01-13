<template>
  <div class="rx-nav-bar">
    rx-nav-bar
  </div>
</template>

<script>
export default {
  name: 'RxNavBar',
  props: {
    routes: {
      type: Array,
      default: () => []
    }
  }
}
</script>
