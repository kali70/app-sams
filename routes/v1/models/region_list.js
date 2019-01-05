const { Model } = require('objection');
const path = require('path');

module.exports = class Regions extends Model {
    static get tableName() {
        return 'regionsvc.region_list';
    }

    static get relationMappings() {
      const Region = require('./regions');
      return {
        regions: {
          relation: Model.HasOneRelation,
          modelClass:Region,
          join: {
            from: 'regionsvc.region_list.id',
            to: 'regionsvc.regions.region_id'
          }
        }
      }
    }
};
