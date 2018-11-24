const { Model } = require('objection');
const path = require('path');

module.exports = class Region extends Model {
    static get tableName() {
        return 'regionsvc.regions';
    }
    static get relationMappings() {
      const Regions = require('./region_list');

      return {
        regions: {
          relation: Model.BelongsToOneRelation,
          modelClass: Regions,
          join: {
            from: 'regionsvc.region_list.id',
            to: 'regionsvc.regions.region_id'
          }
        }
      }
    }
};
