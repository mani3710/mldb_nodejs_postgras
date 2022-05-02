const PROCESS = "/process";

const projectService = {
    createNewProject: `${PROCESS}/create`,
    insertProcessFolder: `${PROCESS}/insert/folder`,
    insertProcessImage: `${PROCESS}/insert/image`,
    insertProcessTracking: `${PROCESS}/insert/tracking`,
    insertProcessPlayerTracking: `${PROCESS}/insert/playertracking`,
    insertProcessAction: `${PROCESS}/insert/action`,
    insertProcessViewType: `${PROCESS}/insert/viewtype`,
    insertProcessEvent: `${PROCESS}/insert/event`,
    insertProcessVisual: `${PROCESS}/insert/visual`,
    insertProcessTiming: `${PROCESS}/insert/timing`,
    getProcessDetails: `${PROCESS}/get/process`,
}

module.exports = projectService;  