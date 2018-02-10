import mix from '../../helpers/mix.js'

const Jumbotron = {
  render (h) {
    return (<div>Hi, nihao!</div>)
  }
}

export default config => mix(config, Jumbotron)
