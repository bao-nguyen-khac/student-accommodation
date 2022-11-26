const authRoute = require('./auth.routes');
const userRoute = require('./user.routes');
const commentRoute = require('./comment.routes');
const auth = require('../app/middlewares/auth.middle')
const postRoute = require('./post.routes')

function route(app) {
    app.use('/api/comment', commentRoute)
    app.use('/api/post', postRoute)
    app.use('/api/auth', authRoute);
    app.use('/api/user', auth, userRoute);
}

module.exports = route;
