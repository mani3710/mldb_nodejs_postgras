const adminController = require('./admin');
const superAdminController = require('./superAdmin');
const staffController = require('./staff');
const studentController = require('./student');
const marksController = require('./marks');
const projectController = require('./project');
module.exports = {
    adminController,
    superAdminController,
    staffController,
    studentController,
    marksController,
    projectController
}