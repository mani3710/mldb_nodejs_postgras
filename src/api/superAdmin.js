const SUPER_ADMIN = "/superadmin";

const superAdminServices = {
    signIn: `${SUPER_ADMIN}/sigin`,
    getAdmin: `${SUPER_ADMIN}/getadmin`,
    createAdmin: `${SUPER_ADMIN}/create/admin`,
    deleteAdmin: `${SUPER_ADMIN}/delete/admin`,
}
module.exports = superAdminServices;