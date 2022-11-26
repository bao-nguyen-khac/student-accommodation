const db = require("../models");
const UserModel = db.user
const PostModel = db.post;
const commentController = require("./comment.controller")
exports.create = (req, res) => {
    const Post = {
        location: req.body.location,
        price: req.body.price,
        title: req.body.title,
        userId: req.userId,
        status: 'EMPTY',
        imageURL: req.file.path,
        desc: req.body.desc
    };

    await = PostModel.create(Post)
    res.status(200).json({ data: data, successful: true });
};

exports.search = async (req, res) => {
    const posts = await PostModel.findAll({
        where: {
            location: { [db.Op.like]: `%${req.query.location}%` }
        }
    })
    res.status(200).json({ posts: posts, successful: true });
}

// Retrieve all Tutorials from the database.
exports.get = async (req, res) => {
    const posts = await PostModel.findAll({
        include: UserModel,
        nest: true,
        raw: true
    })
    for (const post of posts) {
        post.comments = await commentController.getByPostSub(post.id)
    }
    res.status(200).json({
        posts: posts,
        successful: true
    })
};

exports.getOne = async (req, res) => {
    const { id } = req.query;
    const postDetail = await PostModel.findByPk(id)
    res.status(200).json({
        post: postDetail,
        successful: true
    })
}

exports.getByUser = async (req, res) => {
    const posts = await PostModel.findAll({
        where: {
            userId: req.userId
        }
    })
    res.status(200).json({
        post: posts,
        successful: true
    })
}

exports.updatePost = async (req, res) => {
    if (req.file.path) {
        await PostModel.update({
            location: req.body.location,
            price: req.body.price,
            title: req.body.title,
            imageURL: req.file.path,
            desc: req.body.desc
        }, {
            where: {
                id: req.body.id,
            }
        })
    } else {
        await PostModel.update({
            location: req.body.location,
            price: req.body.price,
            title: req.body.title,
            desc: req.body.desc
        }, {
            where: {
                id: req.body.id,
            }
        })
    }


    res.status(200).json({
        successful: true
    })

}

exports.home = async (req, res) => {

    res.status(200).json({ successful: true });
}
