const User = require("../models/User");
const httpStatus = require("http-status");
const { modify } = require("../services/UserService");
const CustomError = require("../errors/CustomError");

const update = async (req, res, next) => {
    try {
        let updatedUser = await modify(req.params.id, req.body)
        console.log(req.params.id, req.body)
        if(!updatedUser) {
            return next(CustomError("User not found", httpStatus.NOT_FOUND))
        }
        return res.status(httpStatus.OK).json({
            success:true,
            messsage:"User updated",
            data:updatedUser
        })
    }catch (err) {
        return next(CustomError(err.message, httpStatus.INTERNAL_SERVER_ERROR))
    }
};


module.exports = {
    update
}