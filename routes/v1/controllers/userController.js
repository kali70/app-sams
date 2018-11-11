const User = require('../repositories/userRepository');
module.exports = class UserController {
  static async getUsers() {
    console.log("I am type controller");
    const results =  await User.getUsers()
    console.log("result", results);
    //
   return results;
  }

  static async createUser(user) {
    console.log("I am in the controller");
    const result = await User.createUser(user);
    return result;
  }
};
