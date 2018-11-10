const Auth = require('../repositories/authRepository');

module.exports = class authController {
    static async getAdmins() {
        const result = await Auth.getAdmins(;
        return result;
    }
};
