const DevelopmentRunner = require('@freshes/house/src/Runners/DevelopmentRunner')

new DevelopmentRunner()
  .setOptions(require('./options'))
  .setAppEnvs({
    NODE_ENV: 'development'
  })
  .extend(require('./extend'))
  .run()
