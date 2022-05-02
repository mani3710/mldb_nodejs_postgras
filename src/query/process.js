const DBService = require('../config/databaseConfig');

const processQueries = {
    async createProcess(
        uuid,
        projectName
    ) {
        const query = `insert into process values('${uuid}','${projectName}')`;
        console.log(query)
        const resultVal = await DBService.query(query);
        return resultVal.rows;
    },
    async insertProcessFolder(
        uuid,
        processId,
        folderName
    ) {
        const query = `insert into process_folder values('${uuid}','${folderName}','${processId}')`;
        console.log(query)
        const resultVal = await DBService.query(query);
        return resultVal.rows;
    },
    async insertProcessImage(
        uuid,
        imageName,
        processId
    ) {
        const query = `insert into process_image values('${uuid}','${imageName}','${processId}')`;
        console.log(query)
        const resultVal = await DBService.query(query);
        return resultVal.rows;
    },
    async insertProcessTracking(
        uuid,
        objectName,
        processId,
        xAxis,
        yAxis
    ) {
        const query = `insert into process_tracking values('${uuid}','${objectName}','${processId}',${xAxis},${yAxis})`;
        console.log(query)
        const resultVal = await DBService.query(query);
        return resultVal.rows;
    },
    async insertProcessPlayerTracking(
        uuid,
        playerId,
        processId,
        postureName
    ) {
        const query = `insert into process_player_track values('${uuid}','${playerId}','${processId}','${postureName}')`;
        console.log(query)
        const resultVal = await DBService.query(query);
        return resultVal.rows;
    },
    async insertProcessAction(
        uuid,
        actionName,
        processId
    ) {
        const query = `insert into process_action values('${uuid}','${actionName}','${processId}')`;
        console.log(query)
        const resultVal = await DBService.query(query);
        return resultVal.rows;
    },
    async insertProcessViewType(
        uuid,
        viewType,
        processId

    ) {
        const query = `insert into process_view_type values('${uuid}','${viewType}','${processId}')`;
        console.log(query)
        const resultVal = await DBService.query(query);
        return resultVal.rows;
    },
    async insertProcessEvent(
        uuid,
        eventId,
        eventName,
        processId

    ) {
        const query = `insert into process_event values('${uuid}','${eventId}','${eventName}','${processId}')`;
        console.log(query)
        const resultVal = await DBService.query(query);
        return resultVal.rows;
    },
    async insertProcessVisual(
        uuid,
        visualType,
        processId
    ) {
        const query = `insert into process_visual values('${uuid}','${visualType}','${processId}')`;
        console.log(query)
        const resultVal = await DBService.query(query);
        return resultVal.rows;
    },
    async insertProcessTiming(
        uuid,
        startTime,
        endTime,
        processId
    ) {
        const query = `insert into process_timing values('${uuid}',${startTime},${endTime},'${processId}')`;
        console.log(query)
        const resultVal = await DBService.query(query);
        return resultVal.rows;
    },
    async getProcessFlow(
        processId
    ) {
        const processQuery = `select * from process where id = '${processId}'`;
        const processResponse = await DBService.query(processQuery);
        const folderQuery = `select * from process_folder where processid = '${processId}'`;
        const folderResponse = await DBService.query(folderQuery);
        const imageQuery = `select * from process_image where processid = '${processId}'`;
        const imageResponse = await DBService.query(imageQuery);
        const trackingQuery = `select * from process_tracking where processid = '${processId}'`;
        const trackingResponse = await DBService.query(trackingQuery);
        const playerTrackingQuery = `select * from process_player_track where processid = '${processId}'`;
        const playerResponse = await DBService.query(playerTrackingQuery);
        const actionQuery = `select * from process_action where processid = '${processId}'`;
        const actionResponse = await DBService.query(actionQuery);
        const viewTypeQuery = `select * from process_view_type where processid = '${processId}'`;
        const viewTypeResponse = await DBService.query(viewTypeQuery);
        const eventQuery = `select * from process_event where processid = '${processId}'`;
        const eventResponse = await DBService.query(eventQuery);
        const visualQuery = `select * from process_visual where processid = '${processId}'`;
        const visualResponse = await DBService.query(visualQuery);
        const timingQuery = `select * from process_timing where processid = '${processId}'`;
        const timingResponse = await DBService.query(timingQuery);

        return {
            process: processResponse.rows[0],
            levelOne: folderResponse.rows,
            levelTwo: imageResponse.rows,
            levelThree: trackingResponse.rows,
            levelFout: playerResponse.rows,
            levelFive: actionResponse.rows,
            levelSix: viewTypeResponse.rows,
            levelSeven: eventResponse.rows,
            levelEight: visualResponse.rows,
            levelNine: timingResponse.rows,
        };
    }
}
module.exports = processQueries;