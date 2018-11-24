const RegionList = require('../models/region_list');

module.exports = class RegionListRepository {

  static async getRegionsList() {
    try {
      const results = await RegionList.query();
      return results;
    }catch (err) {
      throw err;
    }
  }

  static async createRegion(region) {
    try {
        return await RegionList.query().insertAndFetch(region);
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
