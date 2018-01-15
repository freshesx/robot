export function setStorage (name, value) {
  const store = {
    value
  }

  sessionStorage.setItem(name, window.JSON.stringify(store))
}

export function getStorage (name, defaultValue = null) {
  const stringify = sessionStorage.getItem(name)

  if (!stringify) return defaultValue

  const store = window.JSON.parse(stringify)

  return store.value
}
