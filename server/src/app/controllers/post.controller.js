const db = require("../models");
const UserModel = db.user
const PostModel = db.post;

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

    PostModel.create(Post)
        .then(data => {
            res.status(200).json({ data: data, successful: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ successful: false });
        });
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

exports.updatePost = async (req, res) => {
    const { id, location, price, title, imageUrl } = req.body;
    const updateField = {
        ...(location && {location}),
        ...(price && {price}),
        ...(title && {title}),
        ...(imageUrl && {imageUrl})
    }
    const updatedPost = await PostModel.update(updateField,
        {
            where: {
                id
            },
            returning: true,
            plain: true
        }
    )

    res.status(200).json({
        post: updatedPost,
        successful: true
    })

}

exports.home = async (req, res) => {

    res.status(200).json({ successful: true });
}
