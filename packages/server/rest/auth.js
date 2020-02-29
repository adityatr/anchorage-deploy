var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy
const mockUsers = require('../mock/users.json')
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')

module.exports = (app) => {
  passport.use(new LocalStrategy(
    (username, password, done) => {
      const user = mockUsers.find(u => u.email === username)
      if (!user) return done(null, false, { message: 'invalid user' })
      return done(null, user)
    }))

  passport.serializeUser(function (user, done) {
    done(null, user.id)
  })

  passport.deserializeUser(function (user, done) {
    done(null, user)
  })

  app.use(cookieSession({ name: 'session', keys: ['keys'] }))
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(passport.initialize())
  app.use(passport.session())

  app.post('/login',
    passport.authenticate('local', { successRedirect: '/?loggedIn', failWithError: true })
  )

  app.post('/logout',
    (req, res) => {
      req.logout()
      res.redirect('/login')
    })
}
