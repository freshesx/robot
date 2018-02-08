import store from '../../store'
import queryCompose from './queryCompose'
import tableCompose from './tableCompose'

const AppProductQuery = queryCompose({
  name: 'AppProductQuery',
  storeQuery: 'products.query',
  // Action
  async updateQuery (newValue) {
    // Update query
    store.commit('products.updateQuery', newValue)

    // fetch
    const response = await fetch('/api/products', newValue)
    store.commit('products.updateItems', response.data.data)
  }
})

const AppProductTable = tableCompose({
  name: 'AppProductTable',
  storeItems: 'products.items'
})

export default {
  render (h) {
    h(
      'div',
      [
        h(AppProductQuery),
        h(AppProductTable)
      ]
    )
  }
}
