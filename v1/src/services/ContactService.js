const Contact = require("../models/Contact");

const insert = (contactData) => {
  const contact = new Contact(contactData);
  return contact.save();
};

const list = (where) => {
  return Contact.find(where || {});
};

const modify = (id, updateData) => {
  return Contact.findByIdAndUpdate(id, updateData, { new: true });
};

const remove = (id) => {
    return Contact.findByIdAndRemove(id)
}

const getById = (id) => {
    return Contact.findById({_id:id})
}

module.exports = {
  insert,
  list,
  modify,
  remove,
  getById
};
