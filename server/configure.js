const configureApollo = require('./apollo')
const configureExpres = require('./rest')
const configureAuth = require('./rest/auth')
const mockUsers = require('./mock/users.json')

module.exports = (app) => {
  configureAuth(app)
  configureApollo(app)
  configureExpres(app)

  app.get('/api/me', (req, res) => {
    const user = mockUsers.find(u => u.id === req.user)
    res.json(user)
  })
}
