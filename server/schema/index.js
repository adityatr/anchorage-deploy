const Joi = require('@hapi/joi')
const { validGitRegex } = require('../constants')

const gitRepo = Joi.object({
  repoUrl: Joi.string().pattern(validGitRegex).message('Git Repo is not Valid')
})

module.exports = { gitRepo }
