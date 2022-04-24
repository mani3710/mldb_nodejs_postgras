const DBService = require('../config/databaseConfig');

const projectQueries = {
    async createProject(
        uuid,
        studentid,
        title,
        abstract,
        introduction,
        literationSurveyRelatedWork,
        design,
        implementation,
        result,
        conclusion,
        referencesurl,
        domain,
        createDate,
        docurl
    ) {
        const query = `insert into project values('${uuid}','${studentid}','${title}','${abstract}','${introduction}','${literationSurveyRelatedWork}','${design}','${implementation}','${result}','${conclusion}','${referencesurl}','${domain}','${createDate}','${docurl}')`;
        console.log(query)
        const resultVal = await DBService.query(query);
        return resultVal.rows;
    },
    async getProjectByID(
        projectid
    ) {
        const query = `select * from project where uuid='${projectid}'`;
        console.log(query)
        const resultVal = await DBService.query(query);
        return resultVal.rows;
    },


}
module.exports = projectQueries;