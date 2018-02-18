const state = {
  menuCollapse: false,
  signIn: {
    username: undefined,
    password: undefined
  }
}

export default function () {
  return {
    $robot: {
      state
    }
  }
}
