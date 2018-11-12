const User = require('../models/user');
const Admin = require('../models/administrator');
const Type = require('../models/type');

module.exports = class AdminRepository {
  static async getAdmins() {
    try {
      const results = await Admin.query();
      console.log("Model: ", results);
      return results;
    }catch (err) {
      console.log("ERR::", err);
      throw err;
    }
  }

  static async createAdmin(admin) {
    try {
        const type_id = await Type.query().where('type', 'administrator');
        console.log("type_id", type_id);
        const user = await User.query().insertAndFetch({email: admin.email, type: type_id[0].id});
        console.log("user: ", user);
        return Admin.query().insertAndFetch({user_id: user.id, telephon_number: admin.telephon_number, password: admin.password, email: true});
    } catch (err) {
        console.log(err);
        throw err;
    }
  }
  static async deleteAdmin(adminEmail) {
    try {
        const user = await User.query().where('email', adminEmail);
        console.log("user: ", user);
        await Admin.query().delete().where('user_id', user.id);
        return await User.query().delete().where('id', user.id);
    } catch (err) {
        console.log(err);
        throw err;
    }
  }
};
