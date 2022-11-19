const express = require('express');
const route = express.Router();
const DemoController = require('../app/controllers/DemoController')


route.get('/', DemoController.index);

module.exports = route;
