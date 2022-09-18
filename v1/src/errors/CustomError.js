const CustomError = (message, status) => {
    const error = new Error()
    error.message = message || "Unhandled error occurred"
    error.status = status || 500
    return error
}

module.exports = CustomError