import Vue from 'vue'
import { setStorage, getStorage } from './sessionStorage'

export default {
  state: {
    // 用于通过 session storage 存储 tabs
    sessionTabs: getStorage('TABS', []),
    activeTabIndex: getStorage('TAB_INDEX', 0)
  },
  getters: {

  },
  mutations: {
    /**
     * @param {String} name - route name
     * @param {String} title - display page title
     */
    rxNewSessionTab (state, { name, title }) {
      const newTab = {
        name,
        title,
        createAt: new Date(),
        updateAt: new Date()
      }
      state.sessionTabs.push(newTab)

      // Change active
      const index = state.sessionTabs.indexOf(newTab)
      state.activeTabIndex = index

      setStorage('TABS', state.sessionTabs)
      setStorage('TAB_INDEX', index)
    },
    rxCloseSessionTab (tab, { index }) {

    },
    rxPushSessionTab (state, { name, title }) {
      const oldTab = state.sessionTabs[state.activeTabIndex]

      const newTab = Object.assign({}, oldTab, {
        name,
        title,
        updateAt: new Date()
      })

      Vue.set(state.sessionTabs, state.activeTabIndex, newTab)

      setStorage('TABS', state.sessionTabs)
    },
    rxSwitchActiveTabIndex (state, { index }) {
      state.activeTabIndex = index
      setStorage('TAB_INDEX', index)
    }
  },
  actions: {
    rxNewSessionTab (context, params) {
      context.commit('rxNewSessionTab', params)
    },
    rxPushSessionTab (context, params) {
      context.commit('rxPushSessionTab', params)
    },
    rxSwitchActiveTabIndex (context, params) {
      context.commit('rxSwitchActiveTabIndex', params)
    }
  }
}
