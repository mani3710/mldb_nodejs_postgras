const adminServices = require('./adminService');
const superAdminServices = require('./superAdmin');
const staffServices = require('./staff');
const studentServices = require('./student');
const marksService = require('./marksService');
const projectService = require('./project');
module.exports = {
    adminServices,
    superAdminServices,
    staffServices,
    studentServices,
    marksService,
    projectService
}