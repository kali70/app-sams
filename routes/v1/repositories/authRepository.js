const Admin = require('../models/admin');

module.exports = class AuthRepository {
  static async getAdmins() {
    try {
      return await Admin
                .query();
    }catch (err) {
      console.log("ERR::", err);
      throw err;
    }
};
