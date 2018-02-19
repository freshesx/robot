export default function () {
  return {
    $robot: {
      state: {
        // 控制侧边栏折叠和展开
        menuCollapse: false,
        signIn: {
          username: undefined,
          password: undefined
        }
      }
    }
  }
}
