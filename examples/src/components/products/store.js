export const state = {
  query: {
    title: undefined
  },
  items: undefined
}

export const mutations = {
  'products.updateItems' (state, items) {
    state.items = items
  },
  'products.updateQuery' (state, query) {
    state.query = query
  }
}
