const { processQuery } = require('../query');
const adminController = {

    createNewProject: async (req, res) => {
        try {
            console.log(req.body);
            const {
                uuid,
                projectName
            } = req.body;
            const data = await processQuery.createProcess(uuid, projectName);
            console.log(data);

            res.status(200).json({ message: "Successfully created", status: 200 });


            res.end();
        } catch (e) {

            res.status(500).json({ error: e.detail, status: 500 });
            res.end();
        }
    },
    insertFolder: async (req, res) => {
        try {
            console.log(req.body);
            const {
                uuid,
                processId,
                folderName
            } = req.body;
            const data = await processQuery.insertProcessFolder(uuid, processId, folderName);
            console.log(data);

            res.status(200).json({ message: "Inserted successfully", status: 200 });


            res.end();
        } catch (e) {

            res.status(500).json({ error: e.detail, status: 500 });
            res.end();
        }
    },
    insertProcessImage: async (req, res) => {
        try {
            console.log(req.body);
            const {
                uuid,
                imageName,
                processId
            } = req.body;
            const data = await processQuery
                .insertProcessImage(
                    uuid,
                    imageName,
                    processId
                );
            console.log(data);

            res.status(200).json({ message: "Inserted successfully", status: 200 });


            res.end();
        } catch (e) {

            res.status(500).json({ error: e.detail, status: 500 });
            res.end();
        }
    },
    insertProcessTracking: async (req, res) => {
        try {
            console.log(req.body);
            const {
                uuid,
                objectName,
                processId,
                xAxis,
                yAxis
            } = req.body;
            const data = await processQuery
                .insertProcessTracking(
                    uuid,
                    objectName,
                    processId,
                    xAxis,
                    yAxis
                );
            console.log(data);

            res.status(200).json({ message: "Inserted successfully", status: 200 });


            res.end();
        } catch (e) {

            res.status(500).json({ error: e.detail, status: 500 });
            res.end();
        }
    },
    insertProcessPlayerTracking: async (req, res) => {
        try {
            console.log(req.body);
            const {
                uuid,
                playerId,
                processId,
                postureName
            } = req.body;
            const data = await processQuery
                .insertProcessPlayerTracking(
                    uuid,
                    playerId,
                    processId,
                    postureName
                );
            console.log(data);

            res.status(200).json({ message: "Inserted successfully", status: 200 });


            res.end();
        } catch (e) {
            console.log(e);
            res.status(500).json({ error: e.detail, status: 500 });
            res.end();
        }
    },
    insertProcessAction: async (req, res) => {
        try {
            console.log(req.body);
            const {
                uuid,
                actionName,
                processId
            } = req.body;
            const data = await processQuery
                .insertProcessAction(
                    uuid,
                    actionName,
                    processId
                );
            console.log(data);

            res.status(200).json({ message: "Inserted successfully", status: 200 });


            res.end();
        } catch (e) {

            res.status(500).json({ error: e.detail, status: 500 });
            res.end();
        }
    },
    insertProcessViewType: async (req, res) => {
        try {
            console.log(req.body);
            const {
                uuid,
                viewType,
                processId
            } = req.body;
            const data = await processQuery
                .insertProcessViewType(
                    uuid,
                    viewType,
                    processId
                );
            console.log(data);

            res.status(200).json({ message: "Inserted successfully", status: 200 });


            res.end();
        } catch (e) {

            res.status(500).json({ error: e.detail, status: 500 });
            res.end();
        }
    },
    insertProcessEvent: async (req, res) => {
        try {
            console.log(req.body);
            const {
                uuid,
                eventId,
                eventName,
                processId
            } = req.body;
            const data = await processQuery
                .insertProcessEvent(
                    uuid,
                    eventId,
                    eventName,
                    processId
                );
            console.log(data);

            res.status(200).json({ message: "Inserted successfully", status: 200 });


            res.end();
        } catch (e) {

            res.status(500).json({ error: e.detail, status: 500 });
            res.end();
        }
    },
    insertProcessVisual: async (req, res) => {
        try {
            console.log(req.body);
            const {
                uuid,
                visualType,
                processId
            } = req.body;
            const data = await processQuery
                .insertProcessVisual(
                    uuid,
                    visualType,
                    processId
                );
            console.log(data);

            res.status(200).json({ message: "Inserted successfully", status: 200 });


            res.end();
        } catch (e) {

            res.status(500).json({ error: e.detail, status: 500 });
            res.end();
        }
    },
    insertProcessTiming: async (req, res) => {
        try {
            console.log(req.body);
            const {
                uuid,
                startTime,
                endTime,
                processId
            } = req.body;
            const data = await processQuery
                .insertProcessTiming(
                    uuid,
                    startTime,
                    endTime,
                    processId
                );
            console.log(data);

            res.status(200).json({ message: "Inserted successfully", status: 200 });


            res.end();
        } catch (e) {

            res.status(500).json({ error: e.detail, status: 500 });
            res.end();
        }
    },
    getProcessFlow: async (req, res) => {
        try {
            console.log(req.body);
            const {
                processId
            } = req.query;
            const data = await processQuery
                .getProcessFlow(
                    processId
                );
            console.log(data);

            res.status(200).json({ message: "success", status: 200, data: data });


            res.end();
        } catch (e) {

            res.status(500).json({ error: e.detail, status: 500 });
            res.end();
        }
    }
};
module.exports = adminController;   