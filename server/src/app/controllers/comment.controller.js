const { where } = require("sequelize");
const db = require("../models");
const CommentModel = db.comment;
const UserModel = db.user;


// Create and Save a new User
exports.create = (req, res) => {
    const Comment = {
        postId: req.body.postId,
        userId: req.userId,
        content: req.body.content
    };

    CommentModel.create(Comment)
        .then(data => {
            res.status(200).json({ data: data, successful: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ successful: false });
        });
};

// Retrieve all Tutorials from the database.
exports.getByPost = async (req, res) => {
    const comments = await CommentModel.findAll({
        id: req.query.postId,
        include: UserModel,
        nest: true,
        raw: true
    })
    res.status(200).json({
        comments: comments,
        successful: true
    })
};
