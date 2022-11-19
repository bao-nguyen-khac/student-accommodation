const authRoute = require('./auth.routes');
const userRoute = require('./user.routes');
const auth = require('../app/middlewares/auth.middle')
const postRoute = require('./post.route')

function route(app) {
    app.use('/api/post', postRoute)
    app.use('/api/auth', authRoute);
    app.use('/api/user',auth, userRoute);
}

module.exports = route;
