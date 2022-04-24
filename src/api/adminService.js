const ADMIN = "/admin";

const admin = {
    getReview: `${ADMIN}/getreviewlist`,
    signIn: `${ADMIN}/signin`,
    getProjectList: `${ADMIN}/getprojectList`,
    getProjectBatchList: `${ADMIN}/getProjectBatchList`,
    createBatch: `${ADMIN}/createBatch`,
    assignStaff: `${ADMIN}/assignStaff`,
    assignStudent: `${ADMIN}/assignStudent`,
    createProjectReview: `${ADMIN}/create/projectreview`
}

module.exports = admin;