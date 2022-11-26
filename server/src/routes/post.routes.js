const express = require('express');
const route = express.Router();
const post = require('../app/controllers/post.controller.js')
const auth = require('../app/middlewares/auth.middle')
const uploads = require('../util/multer.cloudinary');

route.get('/get', post.get);
// ?title=<title>
route.get('/search', post.search);

route.post('/create', auth, uploads.single('image'), post.create);

route.get('/getOne', auth, post.getOne);

route.post('/update', auth, post.updatePost)



module.exports = route;
