<script>
import { RxBoardMixin } from '@robotx/packages'
import nav from './nav'

export default {
  mixins: [
    RxBoardMixin
  ],
  data () {
    return {
      routes: nav
    }
  }
}
</script>
