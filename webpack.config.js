const dev = require('./config/webpack.dev.js');
const prod = require('./config/webpack.prod.js');

module.exports = (env, argv) => {
  return argv.mode === 'development' ? dev : prod;
};
