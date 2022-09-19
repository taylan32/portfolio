const User = require("../models/User");

const findByEmail = (userEmail) => {
  return User.findOne(userEmail);
};

const modify = (id, updateData) => {
  return User.findByIdAndUpdate(id, updateData, { new: true });
};

const getById = (id) => {
  return User.findById({_id:id})
}

module.exports = {
  findByEmail,
  modify,
  getById
};
