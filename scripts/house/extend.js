const path = require('path')

module.exports = runner => {
  runner.webpackBuilder.extend(webpack => {
    webpack.resolve.alias = {
      '@robotx/packages': path.resolve('./packages')
    }
    return webpack
  })
}
