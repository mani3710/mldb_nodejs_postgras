
const express = require('express')
const superAdminRoutes = express.Router();
const { superAdminServices } = require('../api');
const { superAdminController } = require('../controller');
superAdminRoutes.get(superAdminServices.getAdmin, superAdminController.getAdminList);
superAdminRoutes.post(superAdminServices.createAdmin, superAdminController.createAdmin);
superAdminRoutes.delete(superAdminServices.deleteAdmin, superAdminController.deleteAdmin);
superAdminRoutes.post(superAdminServices.signIn, superAdminController.signIn);

module.exports = superAdminRoutes;
