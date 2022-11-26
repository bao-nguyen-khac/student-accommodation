module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define("comment", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        postId: {
            type: Sequelize.UUID,
        },
        userId: {
            type: Sequelize.UUID
        },
        content: {
            type: Sequelize.STRING,
        },
    });

    return Comment;
};
