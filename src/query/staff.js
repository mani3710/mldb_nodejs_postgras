const DBService = require('../config/databaseConfig');

const staffQueries = {

    async createStaff(uuid, username, staffid, password, email) {
        const query = `insert into staff values('${uuid}','${username}','${staffid}','${password}','${email}')`;
        const result = await DBService.query(query);
        // DBServiecs.end();
        console.log(result.rows);
        return result.rows;
    },
    async getAllStaff() {
        const query = `select * from staff`;
        const result = await DBService.query(query);
        // DBServiecs.end();
        console.log(result.rows);
        return result.rows;
    },
}
module.exports = staffQueries;