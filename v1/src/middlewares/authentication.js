const httpStatus = require("http-status");
const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(httpStatus.UNAUTHORIZED).json({
      success: false,
      message: "You must login",
    });
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(httpStatus.FORBIDDEN).json({
        success: false,
        message: "Your session has expired",
      });
    }

    req.user = user?.doc;
    next();
  });
};

module.exports = {
    authenticate
}
