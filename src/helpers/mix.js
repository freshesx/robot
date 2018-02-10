export default function (config, mixins) {
  if (!Array.isArray(mixins)) {
    mixins = [ mixins ]
  }

  let component = {
    mixins: [].concat(mixins)
  }

  if (config && config.computed) {
    component.computed = { ...config.computed }
  }

  if (config && config.methods) {
    component.methods = { ...config.methods }
  }

  // @todo 检查 lifecycle 的钩子名称，仅允许部分 lifecycle 钩子
  if (config && config.lifecycle) {
    component = { ...component, ...config.lifecycle }
  }

  return component
}
