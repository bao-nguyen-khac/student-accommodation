const db = require("../models");
const UserModel = db.user;
const Op = db.Sequelize.Op;
const jwt = require('jsonwebtoken');

// Create and Save a new User
exports.register = (req, res) => {
    // Validate request
    if (!req.body.email || !req.body.password) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const User = {
        email: req.body.email,
        password: req.body.password,
        role: 'retail'
    };

    UserModel.create(User)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the User."
            });
        });
};

// Retrieve all Tutorials from the database.
exports.login = async (req, res) => {
    const user = await UserModel.findOne({
        where: {
            email: req.body.email,
            password: req.body.password,
        }
    })
    if (user) {
        var token = jwt.sign({ id: user.id }, process.env.JWT_SECRECT, { expiresIn: "8h" });
        res.status(200).json({ token: token, successful: true });
    } else {
        res.status(200).json({ successful: false });
    }
    
};

exports.home = async (req, res) => {

    res.status(200).json({ successful: true });
}
