interface StateInterface {
  [key: string]: mixed
}

interface MutationsInterface {
  [key: string]: Function
}

export interface StoreInterface {
  state: StateInterface,
  mutations: MutationsInterface,
  constructor(prefix: string, { state: ?StateInterface, mutations: ?MutationsInterface }): void,
  serialize(): {
    [key: name]: {
      state: StateInterface,
      mutations: MutationsInterface
    }
  }
}

export default class Store implements StoreInterface {
  constructor (prefix, { state, mutations } = {}) {
    this.prefix = prefix
    this.state = state || {}
    this.mutations = mutations || {}
  }

  serialize () {
  }
}
