const School = require("../models/School")

const insert = (schoolData) => {
    const school = new School(schoolData)
    return school.save()
}

const list = (where) => {
    return School.find(where || {}).populate({path:"user"})
}

const modify = (id, updateData) => {
    return School.findByIdAndUpdate(id, updateData)
}

const remove = (id) => {
    return School.findByIdAndRemove(id)
}

const getById = (id) => {
    return School.findById({_id:id}).populate({path:"user"})
}

module.exports = {
    insert,
    list,
    modify,
    remove,
    getById
}