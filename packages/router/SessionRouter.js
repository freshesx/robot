import Vue from 'vue'
import store from '../../examples/src/store'

let routes = []

function findRoute (routes, routeName) {
  let findedRoute

  for (let index = 0; index < routes.length; index++) {
    if ((routes[index].name) === routeName) {
      findedRoute = routes[index]
    }

    if (routes[index].children && Array.isArray(routes[index].children)) {
      const childRoute = findRoute(routes[index].children, routeName)
      if (childRoute && typeof childRoute === 'object') {
        findedRoute = childRoute
      }
    }

    if (findedRoute && typeof findedRoute === 'object') {
      break
    }
  }

  return findedRoute
}

export default class SessionRouter {
  static push (routeConfig) {
    const findedRoute = findRoute(routes, routeConfig.name)
    store.dispatch('rxPushSessionTab', findedRoute)
  }

  static routes (newRoutes = []) {
    routes = newRoutes
  }

  static find (routeName) {
    return findRoute(routes, routeName)
  }
}
