const Type = require('../models/type');

module.exports = class TypeRepository {
  static async getTypesAndUsers() {
    try {
      const results = await Type.query().eager('users');
      console.log("Model: ", results);
      return results;
    }catch (err) {
      console.log("ERR::", err);
      throw err;
    }
  }
  static async getTypes() {
    try {
      const results = await Type.query();
      console.log("Model: ", results);
      return results;
    }catch (err) {
      console.log("ERR::", err);
      throw err;
    }
  }


  static async createType(type) {
    try {
        return await Type
            .query()
            .insertAndFetch(type);
    } catch (err) {
        console.log(err);
        throw err;
    }
  }

};
