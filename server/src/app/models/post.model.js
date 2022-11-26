module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define("post", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        title: {
            type: Sequelize.STRING,
        },
        location: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.STRING,
        },
        desc: {
            type: Sequelize.STRING,
        },
        imageURL: {
            type: Sequelize.STRING,
        },
        userId: {
            type: Sequelize.UUID
        },
        status: {
            type: Sequelize.STRING
        }
    });

    return Post;
};
