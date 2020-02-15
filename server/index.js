const Express = require('express')
const configure = require('./configure')
const app = new Express()
const port = 8080

configure(app)

app.listen(port, () =>
  console.log(`🚀 Server ready at ${port}`)
)
