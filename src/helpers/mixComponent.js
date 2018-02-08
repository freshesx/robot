export default function mixComponents (config, mixins) {
  if (!Array.isArray(mixins)) {
    mixins = [ mixins ]
  }

  let component = {
    mixins: [].concat(mixins)
  }

  if (config && config.input) {
    component.computed = { ...config.input }
  }

  if (config && config.output) {
    component.methods = { ...config.output }
  }

  if (config && config.hooks) {
    component = { ...component, ...config.hooks }
  }

  return component
}
