<template>
  <div class="rx-nav">
    <h1>rx-nav-bar</h1>
    <div class="rx-nav-items">

    </div>
  </div>
</template>

<script>
export default {
  name: 'RxNav',
  props: {
    routes: {
      type: Array,
      default: () => []
    }
  }
}
</script>
