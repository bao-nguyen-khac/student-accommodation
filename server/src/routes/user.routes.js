const express = require('express');
const route = express.Router();
const user = require('../app/controllers/user.controller.js')
const post = require('../app/controllers/post.controller.js')

route.get('/', user.home);
route.post('/create', post.create);
route.get('/get', post.get);

module.exports = route;
