const configureApollo = require('./apollo')
const configureExpres = require('./rest')

module.exports = (app) => {
  configureApollo(app)
  configureExpres(app)
}
