const { Model } = require('objection');
const path = require('path');

module.exports = class Type extends Model {
    static get tableName() {
        return 'authsvc.type';
    }

    static get relationMappings() {
      const User = require('./user');
      return {
        users: {
          relation: Model.HasManyRelation,
          modelClass: User,
          join: {
            from: 'authsvc.type.id',
            to: 'authsvc.all_users.type'
          }
        }
      }
    }
};
