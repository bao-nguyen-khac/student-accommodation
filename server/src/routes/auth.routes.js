const express = require('express');
const route = express.Router();
const user = require('../app/controllers/user.controller.js')


route.post('/register', user.register);
route.post('/login', user.login);

module.exports = route;
