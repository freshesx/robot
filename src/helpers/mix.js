export default function (config, mixins) {
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

  // @todo 检查 lifecycle 的钩子名称，仅允许部分 lifecycle 钩子
  if (config && config.lifecycle) {
    component = { ...component, ...config.lifecycle }
  }

  return component
}
