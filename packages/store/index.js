export default {
  state: {
    // 用于通过 session storage 存储 tabs
    sessionTabs: []
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
    },
    rxCloseSessionTab (tab) {

    }
  },
  actions: {

  }
}
