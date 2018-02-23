const ProductionRunner = require('@freshes/house/src/Runners/ProductionRunner')

new ProductionRunner()
  .setOptions(require('./options'))
  .setAppEnvs({
    NODE_ENV: 'production'
  })
  .extend(require('./extend'))
  .run()
