const { Model } = require('objection');
const path = require('path');

module.exports = class Type extends Model {
    static get tableName() {
        return 'type';
    }

    static get relationMappings() {
      const User = require('./user');
      return {
        users: {
          relation: Model.HasManyRelation,
          modelClass: User,
          join: {
            from: 'type.id',
            to: 'all_users.type'
          }
        }
      }
    }
};
