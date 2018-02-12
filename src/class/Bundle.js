// @flow

import type { BundleInterface } from './ModuleInterface.js'

export default class Bundle implements BundleInterface {
  constructor (name: string, params: {
    state: Object | void,
    commits: Object | void,
    routes: Array<mixed> | void
  } = {}) {
    if (!name || typeof name !== 'string') {
      throw new Error('The Bundle name does not declare.')
    }

    this.name = name
    this.state = params.state || {}
    this.commits = params.commits || {}
    this.routes = params.routes || []
  }
}
