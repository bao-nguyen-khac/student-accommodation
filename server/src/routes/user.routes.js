const express = require('express');
const route = express.Router();
const user = require('../app/controllers/user.controller.js')

route.get('/', user.home);

module.exports = route;
