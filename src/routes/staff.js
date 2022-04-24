const express = require('express')
const staffRouter = express.Router();
const { staffServices } = require('../api');
const { staffController } = require('../controller');

staffRouter.post(staffServices.createStaff, staffController.createStaff);
staffRouter.get(staffServices.getAllStaff, staffController.getAllStaff);

module.exports = staffRouter; 