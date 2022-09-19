const User = require("../models/User")

const createUser = (userData) => {
    const user = new User(userData)
    return user.save()
}

const loginUser = (loginData) => {
  return User.findOne(loginData)
}

module.exports = {
    createUser,
    loginUser
}