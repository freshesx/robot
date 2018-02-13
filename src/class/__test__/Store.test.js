import Store from '../Store.js'

describe('Store', () => {
  it('returns prefix `dashboard`', () => {
    const store = new Store('dashboard')
    expect(store.prefix).toEqual('dashboard')
  })

  it('throw prefix is not defined.', () => {
    expect(() => {
      new Store()
    }).toThrow('You does not define prefix name.')
  })

  it('returns serialize store module config.', () => {
    const state = {
      menu: []
    }

    const mutations = {
      setMenu (state, menu) {
        state.menu = menu
      }
    }

    const store = new Store('dashboard', { state, mutations })

    expect(store.serialize()).toEqual({
      dashboard: {
        state: {
          menu: []
        },
        mutations: {
          'dashboard.setMenu' (state, menu) {
            state.menu = menu
          }
        }
      }
    })
  })
})
