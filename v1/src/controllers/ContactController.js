const httpStatus = require("http-status")
const CustomError = require("../errors/CustomError")
const { insert, list, modify, remove, getById } = require("../services/ContactService")
const userService = require("../services/UserService")

const create = async(req, res, next) => {
    try {
        const user = await userService.getById(req.body.user)
        if(!user) {
            return next(CustomError("User not found", httpStatus.NOT_FOUND))
        }
        const createdContact = await insert(req.body)
        return res.status(httpStatus.CREATED).json({
            success:true,
            message:"Contact created",
            data:createdContact
        })
    } catch (err) {
        return next(CustomError(err.message, httpStatus.INTERNAL_SERVER_ERROR))
    }
}

const getAll = async(req, res, next) =>  {
    try {
        const user = await userService.getById(req.query.userId)
        if(!user) {
            return next(CustomError("User not found", httpStatus.NOT_FOUND))
        }
        const contacts = await list({user:req.query.userId})
        return res.status(httpStatus.OK).json({
            success:true,
            message:"Contacts listed",
            data:contacts
        })
    } catch (err) {
        return next(CustomError(err.message, httpStatus.INTERNAL_SERVER_ERROR))
    }
}

const update = async (req, res, next) => {
    try {
        const user = await userService.getById(req.body.user)
        if(!user) {
            return next(CustomError("User not found", httpStatus.NOT_FOUND))
        }
        const updatedContact = await modify(req.body)
        return res.status(httpStatus.OK).json({
            success:true,
            message:"Contact updated",
            data:updatedContact
        })
    } catch (err) {
        return next(CustomError(err.message, httpStatus.INTERNAL_SERVER_ERROR))
    }
}

const deleteContact = async (req, res, next) => {
    try {
        const user = await userService.getById(req.body.user)
        if(!user) {
            return next(CustomError("User not found", httpStatus.NOT_FOUND))
        }
        const deletedContact = await remove(req.body)
        return res.status(httpStatus.OK).json({
            success:true,
            message:"Contact deleted",
            data:deletedContact
        })
    } catch (err) {
        return next(CustomError(err.message, httpStatus.INTERNAL_SERVER_ERROR))
    }
}

const getOneById = async (req,res, next) => {
    try {
        const user = await userService.getById(req.body.user)
        if(!user) {
            return next(CustomError("User not found", httpStatus.NOT_FOUND))
        }
        const contact = await getById(req.params.id)
        if(!contact) {
            return next(CustomError("Contact not found", httpStatus.NOT_FOUND))
        }
        return res.status(httpStatus.OK).json({
            success:true,
            message:"Contact created",
            data:contact
        })
    } catch (err) {
        return next(CustomError(err.message, httpStatus.INTERNAL_SERVER_ERROR))
    }
}

module.exports = {
    create,
    getAll,
    update,
    deleteContact,
    getOneById
}