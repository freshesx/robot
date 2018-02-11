// @flow

import type { ModuleInterface, RouteInterface } from './ModuleInterface.js'

export default class Module implements ModuleInterface {
  constructor (params: {
    state: Object | void,
    commits: Object | void,
    routes: Array<RouteInterface> | void
  }) {
    this.state = params.state || {}
    this.commits = params.commits || {}
    this.routes = params.routes || []
  }
}
