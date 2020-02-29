const mockUsers = require('../mock/users.json')

module.exports = {
  Query: {
    user: (parent, args, context) => {
      console.log(args)
      const id = args.id || (context.user ? context.user.id : 0)
      const user = mockUsers.find(u => u.id === id) || {}
      return user
    }
  }
}
