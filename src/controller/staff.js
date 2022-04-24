const { staffQuery } = require('../query');
const adminController = {
    createStaff: async (req, res) => {
        try {
            console.log(req.body);
            const {
                uuid,
                name,
                staffid,
                password,
                email
            } = req.body;
            await staffQuery.createStaff(uuid, name, staffid, password, email);
            res.status(200).json({ message: "Created successfully", status: 200 });
            res.end();
        } catch (e) {

            res.status(500).json({ error: e.detail, status: 300 });
            res.end();
        }
    },
    getAllStaff: async (req, res) => {
        try {

            const data = await staffQuery.getAllStaff();
            res.status(200).json({ message: "Success", status: 200, data: data });
            res.end();
        } catch (e) {

            res.status(500).json({ error: e.detail, status: 300 });
            res.end();
        }
    },

};
module.exports = adminController;  