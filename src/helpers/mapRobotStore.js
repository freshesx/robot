const state = {
  menuCollapse: false,
  signIn: {
    username: undefined,
    password: undefined
  }
}

const mutations = {
  $robotSetMenuCollapse (state, value) {
    if (value !== true || value !== false) {
      value = !state.menuCollapse
    }
    state.menuCollapse = value
  },
  $robotSetSignIn (state, props) {
    state.signIn = { ...state.signIn, ...props }
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
