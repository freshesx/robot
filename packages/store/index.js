export default {
  state: {
    // 用于通过 session storage 存储 tabs
    sessionTabs: [],
    activeTabIndex: 0
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
    },
    rxCloseSessionTab (tab) {

    }
  },
  actions: {
    rxNewSessionTab (context, params) {
      context.commit('rxNewSessionTab', params)
    }
  }
}
