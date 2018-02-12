// @flow

import type { BundleInterface } from './ModuleInterface.js'

export default class Bundle implements BundleInterface {
  constructor (params: {
    state: Object | void,
    commits: Object | void,
    routes: Array<mixed> | void
  } = {}) {
    this.state = params.state || {}
    this.commits = params.commits || {}
    this.routes = params.routes || []
  }
}
