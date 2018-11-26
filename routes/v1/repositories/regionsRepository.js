const Regions = require('../models/regions');
const RegionList = require('../models/region_list');
module.exports = class RegionsRepository {

  static async getRegion() {
    try {
      const results = await Regions.query();
      return results;
    }catch (err) {
      throw err;
    }
  }

  static async createRegion(region) {
    try {
        const regions_id = await RegionList.query().where('name', region.name);
        console.log("regions_id: ", regions_id[0].id);
        region.region_id = regions_id[0].id;
        return await Regions.query().insertAndFetch(region);
    } catch (err) {
        throw err;
    }
  }
};
