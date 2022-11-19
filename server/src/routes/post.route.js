const express = require('express');
const route = express.Router();
const post = require('../app/controllers/post.controller.js')


route.get('/get', post.get);

route.post('/create', post.create);

route.get('/getOne', post.getOne);



module.exports = route;
