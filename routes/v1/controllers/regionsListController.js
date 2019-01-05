const RegionsList = require('../repositories/regionsListRepository');
//const createToken = require('../utils/createToken');

module.exports = class regionsListController {
  static async getRegionsList() {
    console.log("I am RegionsList controller");
    const results =  await RegionsList.getRegionsList()
    console.log("result", results);
    //
   return results;
  }

  static async createRegion(region) {
    console.log("I am in the controller");
    const result = await RegionsList.createRegion(region);
    return result;
  }

};
