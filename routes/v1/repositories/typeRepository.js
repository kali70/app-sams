const Type = require('../models/type');

module.exports = class TypeRepository {

  static async getTypes() {
    try {
      const results = await Type.query();
      return results;
    }catch (err) {
      throw err;
    }
  }

  static async createType(type) {
    try {
        return await Type.query().insertAndFetch(type);
    } catch (err) {
        throw err;
    }
  }

  // static async deleteType(type) {
  // }
  //
  // static async updateType(type) {
  // }


};
