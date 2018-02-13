// @flow

export default class Store {
  prefix: string
  state: { [key: string]: mixed }
  mutations: { [key: string]: Function }

  constructor (prefix, { state, mutations } = {}) {
    if (!prefix) {
      throw new Error('You does not define prefix name.')
    }

    this.prefix = prefix
    this.state = state || {}
    this.mutations = mutations || {}
  }

  serialize () {
    const mutations = {}

    for (const key in this.mutations) {
      if (this.mutations.hasOwnProperty(key)) {
        const mutation = this.mutations[key]
        mutations[`dashboard.${key}`] = mutation
      }
    }

    return {
      [this.prefix]: {
        state: this.state,
        mutations
      }
    }
  }
}
