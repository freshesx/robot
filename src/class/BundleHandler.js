import type { BundleHandlerInterface } from './BundleHandlerInterface.js'
import type { BundleInterface } from './BundleInterface.js'

export default class BundleHander implements BundleHandlerInterface {
  bundleNames: Array<string>
  storeMaps: Object
  routeModules: Array<mixed>

  constructor (bundles: Array<BundleInterface>): void {
    const bundleNames = []
    const storeMaps = {}
    let routeModules = []

    for (const name in bundles) {
      if (bundleNames.indexOf(name) > -1) {
        throw new Error('The module name is duplicate.')
      }

      const bundle = bundles[name]

      bundleNames.push(bundle.name)

      storeMaps[name] = {
        state: bundle.state,
        mutations: bundle.commits
      }

      routeModules = [ ...routeModules, ...bundle.routes ]
    }

    this.bundleNames = bundleNames
    this.storeMaps = storeMaps
    this.routeModules = routeModules
  }
}
