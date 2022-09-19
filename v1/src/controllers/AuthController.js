const { createUser, loginUser } = require("../services/AuthService");
const {
  passwordToHash,
  generateAccessToken,
  generateRefreshToken,
} = require("../scripts/utils/authHelper");
const { findByEmail } = require("../services/UserService");
const CustomError = require("../errors/CustomError");
const httpStatus = require("http-status");

const register = async (req, res, next) => { 
  try {
    req.body.password = passwordToHash(req.body.password);
    const user = await findByEmail({email:req.body.email});
    if (user != null) {
      return next(CustomError("Email already exists.", httpStatus.BAD_REQUEST));
    }
    
    req.body.images = ["default.png"]
    const createdUser = await createUser(req.body);
    
    return res.status(httpStatus.CREATED).json({
      success: true,
      message: "User registered",
      data:createdUser
    });
  } catch (error) {
    return next(CustomError(error.message, httpStatus.INTERNAL_SERVER_ERROR));
  }
};

const login = async (req, res, next) => {
    try {
    req.body.password = passwordToHash(req.body.password);
    let user = await loginUser(req.body);
    if (user == null) {
      return next(CustomError("Email or password is wrong", httpStatus.BAD_REQUEST));
    }
    user = {
      ...user.toObject(),
      tokens: {
        accessToken: generateAccessToken(user),
        refreshToken: generateRefreshToken(user),
      },
    };
    return res.status(httpStatus.OK).json({
      success: true,
      message: "Signed in",
      data: user,
    });
  } catch (error) {
    return next(CustomError(error.message, httpStatus.INTERNAL_SERVER_ERROR));
  }
};

module.exports = {
  register,
  login
};
