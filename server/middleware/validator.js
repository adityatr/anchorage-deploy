const validator = (schema, property) => {
  return (req, res, next) => {
    const { error } = schema.validate(req[property])
    console.log(error)
    const valid = error == null
    if (valid) { next() } else {
      const { details } = error
      const message = details.map(i => i.message).join(',')
      console.log('error', message)
      res.status(400).json({ code: 400, message: message })
    }
  }
}

module.exports = validator
