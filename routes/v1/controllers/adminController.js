const Admin = require('../repositories/adminRepository');
module.exports = class AdminController {
  static async getAdmins() {
    console.log("I am type controller");
    const results =  await Admin.getAdmins()
    console.log("result", results);
    return results;
  }

  static async createAdmin(admin) {
    console.log("I am in the controller");
    const result = await Admin.createAdmin(admin);
    return result;
  }

  static async deleteAdmin(adminEmail) {
    console.log("I am in the controller");
    const result = await Admin.deleteAdmin(adminEmail);
    return result;
  }

};
