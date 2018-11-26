const { Model } = require('objection');
const path = require('path');

module.exports = class Regions extends Model {
    static get tableName() {
        return 'regionsvc.regions';
    }

    static get idColumn() {
      return 'region_id';
    }

    static get relationMappings() {
      const Region = require('./region_list');
      return {
        regions: {
          relation: Model.HasOneRelation,
          modelClass:Region,
          join: {
            from: 'regionsvc.regions.region_id',
            to: 'regionsvc.region_list.id'
          }
        }
      }
    }
};
