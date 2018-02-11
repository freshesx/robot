import type { ModuleInterface } from './ModuleInterface.js'

export interface RouteInterface {
  path: string,
  name: string,
  components: Array | Object | Function | void,
  modules: Array<ModuleInterface>
}
