import { Bundle } from '@freshes/robot'

const state = {
  query: {
    title: undefined
  },
  items: undefined
}

const mutations = {
  'products.updateItems' (state, items) {
    state.items = items
  },
  'products.updateQuery' (state, query) {
    state.query = query
  }
}

export const routes = [
  {
    path: 'products',
    name: 'products.index',
    component: () => import('./list.js')
  }
]

export default new Bundle('products', {
  state,
  mutations
})
