import Vue from 'vue'

let routes = []

function findRoute (route, routeName) {
  let findedRoute

  routes.some(route => {
    if (route.name === routeName) {
      findedRoute = route
      return true
    }
    if (route.children) {
      findedRoute = findRoute(route.children, routeName)
      if (findedRoute) return true
    }
  })

  return findedRoute
}

export default class SessionRouter {
  static push (routeConfig) {
    const findedRoute = findRoute(routeConfig.name)
    console.log(findedRoute)
  }

  static routes (newRoutes = []) {
    routes = newRoutes
  }

  static find (routeName) {
    return findRoute(routes, routeName)
  }
}
