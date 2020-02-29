const configureApollo = require('./apollo')
const configureExpress = require('./rest')
const configureAuth = require('./rest/auth')
const mockUsers = require('./mock/users.json')

module.exports = (app) => {
  configureAuth(app)
  configureApollo(app)
  configureExpress(app)

  app.get('/api/me', (req, res) => {
    const user = mockUsers.find(u => u.id === req.user)
    res.json(user)
  })
}
