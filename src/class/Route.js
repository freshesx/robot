// @flow

import type { ModuleInterface } from './ModuleInterface.js'

export default class RtRoute {
  constructor (params: {
    path: string,
    name: string,
    components: Array | Function | Object | void,
    modules: Array<ModuleInterface>
  }) {
    this.path = params.path
    this.name = params.name
    this.components = params.components
    this.modules = params.modules
  }
}
