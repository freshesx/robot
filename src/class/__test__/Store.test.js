import Store from '../Store.js'

describe('Store', () => {
  it('returns prefix `dashboard`', () => {
    const store = new Store('dashboard')
    expect(store.prefix).toEqual('dashboard')
  })
})
