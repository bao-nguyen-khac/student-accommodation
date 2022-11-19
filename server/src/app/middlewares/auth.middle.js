
const jwt = require('jsonwebtoken');

function verifyToken(token) {
    try {
        var checkToken = jwt.verify(token, process.env.JWT_SECRECT);
        return checkToken._id;
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = function AuthenMiddleware(req, res, next) {
    try {
        var token = req.header("Authorization").split(" ")[1]
        var checkToken = verifyToken(token);
        req.userId = checkToken;
        next();
    } catch (error) {
        res.status(401).json({ message: "Token is not valid", sucessful: false })
    }
}