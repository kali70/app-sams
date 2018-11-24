const { Model } = require('objection');
const path = require('path');

module.exports = class User extends Model {
    static get tableName() {
        return 'authsvc.all_users';
    }
    static get relationMappings() {
      const Type = require('./type');
      const Admin = require('./administrator');

      return {
        types: {
          relation: Model.BelongsToOneRelation,
          modelClass: Type,
          join: {
            from: 'authsvc.all_users.type',
            to: 'authsvc.type.id'
          }
        },
        admin: {
          relation: Model.HasOneRelation,
          modelClass: Admin,
          join: {
            from: 'authsvc.all_users.id',
            to: 'authsvc.administrator.user_id'
          }
        }
      }
    }
};
