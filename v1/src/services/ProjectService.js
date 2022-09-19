const Project = require("../models/Project");

const insert = (projectData) => {
  const project = new Project(projectData);
  return project.save();
};

const list = (where) => {
  return Project.find(where || {}).populate({
    path:"user"
  })
};

const getById = (id) => {
  return Project.findById({ _id: id }).populate({
    path:"user"
  })
};

const modify = (id, updateData) => {
  return Project.findByIdAndUpdate(id, updateData, { new: true }).populate({
    path:"user"
  })
};

const remove = (id) => {
    return Project.findByIdAndRemove(id)
}

module.exports = {
    insert,
    list,
    getById,
    modify,
    remove
}