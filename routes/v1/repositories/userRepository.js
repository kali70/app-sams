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

  static async getAdminUsers() {
    try {
      const results = await User.query().eager('admin');
      console.log("Model: ", results);
      return results;
    }catch (err) {
      console.log("ERR::", err);
      throw err;
    }
  }

  // static async createUser(user) {
  //   try {
  //       const type_id = await Type.query().where('type', 'administrator');
  //       console.log("type_id")
  //       return await User.query().insert({email: user.email, type: type_id[0].id})
  //   } catch (err) {
  //       console.log(err);
  //       throw err;
  //   }
  // }
};
