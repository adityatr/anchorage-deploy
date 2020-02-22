const validator = require('../middleware/validator')
const gitRepo = require('../schema').gitRepo
var shell = require('shelljs')

module.exports = (app) => {
  app.post('/gitrepo',
    validator(gitRepo, 'query'),
    (req, res) => {
      const { query: { repoUrl } } = req
      shell.exec(`git ls-remote -h ${repoUrl}`, { silent: true }, (code, stdout, stderr) => {
        if (stderr) {
          res.status(400).send(stderr)
        }
        if (stdout) {
          res.send('hello')
        }
      })
    })
}
