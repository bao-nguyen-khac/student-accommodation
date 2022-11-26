const { Sequelize, QueryTypes, Op } = require("sequelize");

const sequelize = new Sequelize(process.env.POSTGRES_DATABASE, process.env.POSTGRES_USERNAME, process.env.POSTGRES_PASSWORD, {
    host: process.env.POSTGRES_HOST,
    dialect: 'postgres',
    operatorsAliases: false,
    logging: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.QueryTypes = QueryTypes;
db.Op = Op;

db.user = require("./user.model.js")(sequelize, Sequelize);
db.post = require("./post.model.js")(sequelize, Sequelize);
db.comment = require("./comment.model.js")(sequelize, Sequelize);

db.user.hasMany(db.post, {
    foreignKey: 'userId'
})
db.post.belongsTo(db.user, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

db.post.hasMany(db.comment, {
    foreignKey: 'postId'
})

db.comment.belongsTo(db.post, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

db.user.hasMany(db.comment, {
    foreignKey: 'userId'
})

db.comment.belongsTo(db.user, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})



module.exports = db;
