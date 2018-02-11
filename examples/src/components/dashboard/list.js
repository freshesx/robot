import { mixDashboard } from '@freshes/robot'

export default mixDashboard({
  computed: {
    menu () {
      return this.$store.state.dashboard.menu
    }
  },
  methods: {
    update () {
    }
  },
  lifecycle: {
    created () {
    }
  }
})
