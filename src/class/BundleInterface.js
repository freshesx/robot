import type { RouteInterface } from './RouteInterface.js'

export interface RtModuleInterface {
  state: Object,
  commits: {
    [string]: Function
  },
  routes: Array<RouteInterface>,
  constructor (name: string, params: mixed): void
}
