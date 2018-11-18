const { Model } = require('objection');
const path = require('path');

module.exports = class User extends Model {
    static get tableName() {
        return 'all_users';
    }
    static get relationMappings() {
      const Type = require('./type');
      const Admin = require('./administrator');

      return {
        types: {
          relation: Model.BelongsToOneRelation,
          modelClass: Type,
          join: {
            from: 'all_users.type',
            to: 'type.id'
          }
        },
        admin: {
          relation: Model.HasOneRelation,
          modelClass: Admin,
          join: {
            from: 'all_users.id',
            to: 'administrator.user_id'
          }
        }
      }
    }
};
