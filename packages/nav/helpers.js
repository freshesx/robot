export function filterNavRoutes (routes) {
  if (!Array.isArray(routes)) return []

  return routes.filter(route => {
    return route.meta && route.meta.nav
  })
}
