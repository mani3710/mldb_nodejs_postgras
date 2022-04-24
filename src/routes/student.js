const express = require('express')
const studentRouter = express.Router();
const { studentServices } = require('../api');
const { studentController } = require('../controller');

studentRouter.post(studentServices.createStudent, studentController.createStudent);

module.exports = studentRouter; 