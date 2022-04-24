const { projectQuery } = require('../query');
const projectController = {
    uploadProject: async (req, res) => {
        try {
            console.log(req.body);
            const {
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
            } = req.body;
            const data = await projectQuery.createProject(
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
            );

            res.status(200).json({ message: "Successfully inserted", status: 200 });

            res.end();
        } catch (e) {
            console.log("error", e);
            res.status(500).json({ error: e.detail, status: 500 });
            res.end();
        }
    },
    getProjectByID: async (req, res) => {
        try {
            console.log(req.query);
            const {
                projectid
            } = req.query;
            const data = await projectQuery.getProjectByID(
                projectid
            );
            res.status(200).json({ message: "Success", status: 200, data: data[0] });

            res.end();
        } catch (e) {
            console.log("error", e);
            res.status(500).json({ error: e.detail, status: 500 });
            res.end();
        }
    }
}
module.exports = projectController;