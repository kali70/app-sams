const User = require('../models/user');
const Type = require('../models/type');

module.exports = class UserRepository {
  static async getUsers() {
    try {
      const results = await User.query();
      console.log("Model: ", results);
      return results;
    }catch (err) {
      console.log("ERR::", err);
      throw err;
    }
  }
  // This methods needs to be modified to create a normal app user (Non Admin previligae)
  static async createUser() {
    try {
      const result = await User.query();
      return result;
    }catch (err) {
      throw err;
    }
  }

  static async getAdminUser() {
    try {
      const user = await User.query().where("email", "khaled_ali70@yahoo.com").first();
      const admin = await user.$relatedQuery('admin');
      return admin;
    }catch (err) {
      console.log("ERR::", err);
      throw err;
    }
  }

  static async createAdminUser(user) {
    try {
        const type_id = await Type.query().where('type', 'administrator');
        const newAdmin = await User.query().insert({email: user.email, type: type_id[0].id, role: user.role}).returning('*');
        return await newAdmin.$relatedQuery('admin').insert({user_id: newAdmin.id, email_valid: user.email_valid, password: user.password, telephon_number: user.telephon_number})
    } catch (err) {
        console.log(err);
        throw err;
    }
  }

  // static async updateAdminUser(user) {
  // }
  //
  // static async deleAdminUser(user) {
  // }
};
