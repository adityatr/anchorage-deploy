const validator = require('../middleware/validator')
const gitRepo = require('../schema').gitRepo

module.exports = (app) => {
  app.post('/gitrepo',
    validator(gitRepo, 'query'),
    (req, res) => {
      res.send('hello')
    })
}
