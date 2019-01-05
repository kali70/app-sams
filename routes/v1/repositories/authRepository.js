const User = require('../models/user');
const Type = require('../models/type');
const bcrypt = require('bcrypt');


module.exports = class AuthRepository {
  static async getAdminUser(userInfo) {
    // We need to verfiy email and password her. Wehn verfied, send the user object back
    try {
      const user = await User.query().where("email", userInfo.email).first();
      if(user) {
        const type = await Type.query().where("id", user.type)
        if(type[0].type === 'administrator'){
          const admin = await user.$relatedQuery('admin');
          if(bcrypt.compareSync(userInfo.password, admin.password)) {
            user.administrator = true;
            return user;
          } else {
            return "Password does not match"
          }
        }
      } else {
        console.log("The user does not exist");
      }
    }catch (err) {
      console.log("ERR::", err);
      throw err;
    }
  }
};
