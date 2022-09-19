const {insert, list, getById, modify, remove} = require("../services/ProjectService")
const CustomError = require("../errors/CustomError")
const httpStatus = require("http-status")
const userService = require("../services/UserService") 

const create = async (req, res, next) => {
    try {
        const user = await userService.getById(req.body.user)
        if(user == null) {
            return next(CustomError("User not found", httpStatus.NOT_FOUND))
        }
       let createdProject =  await insert(req.body)
       return res.status(httpStatus.CREATED).json({
        success:true,
        message:"Project created",
        data:createdProject
       })
    } catch (err) {
        next(CustomError("Unhandled error occurred.", httpStatus.INTERNAL_SERVER_ERROR))
    }
}

const getAll = async (req, res, next) => {
    try {
        let user = await userService.getById(req.query.userId)
        if(!user) {
            return next(CustomError("User not found", httpStatus.NOT_FOUND))
        }
       let projects = await list({user:req.query.userId})
       return res.status(httpStatus.OK).json({
        success:true,
        message:"Projects listed",
        data:projects
       })
       
     } catch (err) {
         next(CustomError("Unhandled error occurred.", httpStatus.INTERNAL_SERVER_ERROR))
     }
}

const update = async (req, res, next) => {
    try {
        const updatedProject = await modify(req.params.id, req.body)
        if(!updatedProject) {
            return next(CustomError("Project not found", httpStatus.NOT_FOUND))
        }
        return res.status(httpStatus.OK).json({
            success:true,
            message:"Project updated",
            data:updatedProject
        })
       
     } catch (err) {
         next(CustomError("Unhandled error occurred.", httpStatus.INTERNAL_SERVER_ERROR))
     }
}

const deleteProject = async (req, res, next) => {
    try {
        const deletedProject = await remove(req.params.id)
        if(!deletedProject ) {
            return next(CustomError("Project not found", httpStatus.NOT_FOUND))
        }
        return res.status(httpStatus.OK).json({
            success:true,
            message:"Project deleted",
            data:deletedProject
        })
     } catch (err) {
         next(CustomError("Unhandled error occurred.", httpStatus.INTERNAL_SERVER_ERROR))
     }
}

const getOneById = async (req, res, next) => {
    try {
        const project = await getById(req.params.id)
        if(!project) {
            return next(CustomError("Project not found", httpStatus.NOT_FOUND))
        }
        return res.status(httpStatus.OK).json({
            success:true,
            message:"Project found",
            data:project
        })
     } catch (err) {
         next(CustomError("Unhandled error occurred.", httpStatus.INTERNAL_SERVER_ERROR))
     }
}


module.exports = {
    create,
    getAll,
    update,
    deleteProject,
    getOneById
}