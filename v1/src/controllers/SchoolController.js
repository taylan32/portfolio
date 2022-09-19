const httpStatus = require("http-status")
const CustomError = require("../errors/CustomError")
const {insert, list, modify, remove, getById} = require("../services/SchoolService")
const userService = require("../services/UserService")

const create = async (req, res, next) => {
    try {
        const user = await userService.getById(req.body.user)
        if(!user) {
            return next(CustomError("User not found", httpStatus.NOT_FOUND))
        }
        const createdSchool = await insert(req.body)
        return res.status(httpStatus.CREATED).json({
            success:true,
            message:"School created",
            data:createdSchool
        })
    } catch (err) {
        return next(CustomError(err.message, httpStatus.INTERNAL_SERVER_ERROR))
    }
}

const getAll = async (req, res, next) => {
    try {
        const user = await userService.getById(req.query.userId)
        if(!user) {
            return next(CustomError("User not found", httpStatus.NOT_FOUND))
        }
        const schools = await list({user:req.query.userId})
        return res.status(httpStatus.OK).json({
            success:true,
            message:"School listed",
            data:schools
        })
        
    } catch (err) {
        return next(CustomError(err.message, httpStatus.INTERNAL_SERVER_ERROR))
    }
}

const update = async (req, res, next) => {
    try {
        const updatedSchool = await modify(req.params.id,req.body)
        if(!updatedSchool) {
            return next(CustomError("School not found", httpStatus.NOT_FOUND))
        }
        return res.status(httpStatus.CREATED).json({
            success:true,
            message:"School updated",
            data:updatedSchool
        })
    } catch (err) {
        return next(CustomError(err.message, httpStatus.INTERNAL_SERVER_ERROR))
    }
}

const deleteSchool = async (req, res, next) => {
    try {
        const deletedSchool = await remove(req.params.id)
        if(!deletedSchool) {
            return next(CustomError("School not found", httpStatus.NOT_FOUND))
        }
        return res.status(httpStatus.CREATED).json({
            success:true,
            message:"School deleted",
            data:deletedSchool
        })
    } catch (err) {
        return next(CustomError(err.message, httpStatus.INTERNAL_SERVER_ERROR))
    }
}

const getOneById = async (req, res, next) => {
    try {
        const school = await getById(req.params.id)
        if(!school) {
            return next(CustomError("School not found", httpStatus.NOT_FOUND))
        }
        return res.status(httpStatus.CREATED).json({
            success:true,
            message:"School created",
            data:school
        })
    } catch (err) {
        return next(CustomError(err.message, httpStatus.INTERNAL_SERVER_ERROR))
    }
}

module.exports = {
    create,
    getAll,
    update,
    deleteSchool,
    getOneById
}