const express = require('express')
const marksRouter = express.Router();
const { processService } = require('../api');
const { processController } = require('../controller');

marksRouter.post(processService.createNewProject, processController.createNewProject);
marksRouter.post(processService.insertProcessFolder, processController.insertFolder);
marksRouter.post(processService.insertProcessImage, processController.insertProcessImage);
marksRouter.post(processService.insertProcessTracking, processController.insertProcessTracking);
marksRouter.post(processService.insertProcessPlayerTracking, processController.insertProcessPlayerTracking);
marksRouter.post(processService.insertProcessAction, processController.insertProcessAction);
marksRouter.post(processService.insertProcessViewType, processController.insertProcessViewType);
marksRouter.post(processService.insertProcessEvent, processController.insertProcessEvent);
marksRouter.post(processService.insertProcessVisual, processController.insertProcessVisual);
marksRouter.post(processService.insertProcessTiming, processController.insertProcessTiming);
marksRouter.get(processService.getProcessDetails, processController.getProcessFlow);


module.exports = marksRouter;   