const state = {
  menuCollapse: false
}

const mutations = {
  $robotSetMenuCollapse (state, value) {
    if (value !== true || value !== false) {
      value = !state.menuCollapse
    }
    state.menuCollapse = value
  }
}

export default () => {
  return {
    $robot: {
      state,
      mutations
    }
  }
}
