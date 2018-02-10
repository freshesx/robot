import Vue from 'vue'

export default {
  name: 'RtSignInMixin',
  render (h) {
    const ElForm = Vue.component('ElForm')

    return (
      <ElForm>
        {(
          this.forms.map(field => this.parseField(h, field))
        )}
      </ElForm>
    )
  },
  methods: {
    parseField (h, field) {
      return h(field)
    }
  },
  computed: {
    forms () {
      return []
    }
  }
}
