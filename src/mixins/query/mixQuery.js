import mix from '../../helpers/mix.js'

const Query = {
  render (h) {
    return (<div>Hi, query!</div>)
  }
}

export default config => mix(Query, config)
