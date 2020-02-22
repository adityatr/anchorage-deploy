module.exports = (app) => {
  app.post('/gitrepo', (req, res) => {
    res.send(req)
  })
}
