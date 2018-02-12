import type { BundleInterface } from './BundleInterface.js'

export interface BundleHanderInterface {
  bundleNames: Array<string>,
  storeMaps: Object,
  routeModules: Array<mixed>,
  constructor(bundles: Array<BundleInterface>): void
}
