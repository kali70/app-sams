const Auth = require('../repositories/authRepository');
const createToken = require('../utils/createToken');
module.exports = class AuthController {
  static async AuthAdminByEmail(user) {
    const results =  await Auth.getAdminUser(user);
    const token = createToken(results);
    console.log("token: ", token);
   return {results, token};
  }
};
