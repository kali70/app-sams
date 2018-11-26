const Regions = require('../repositories/regionsRepository');
//const createToken = require('../utils/createToken');

module.exports = class regionsController {
  static async getRegion() {
    console.log("I am RegionsList controller");
    const results =  await Regions.getRegion()
    console.log("result", results);
    //
   return results;
  }

  static async createRegion(region) {
    console.log("I am in the controller");
    const result = await Regions.createRegion(region);
    return result;
  }

};
