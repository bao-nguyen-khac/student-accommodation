const express = require('express');
const route = express.Router();
const comment = require('../app/controllers/comment.controller.js')
const auth = require('../app/middlewares/auth.middle')

route.get('/getByPost', comment.getByPost);
// ?title=<title>
route.post('/create', auth, comment.create);


module.exports = route;
