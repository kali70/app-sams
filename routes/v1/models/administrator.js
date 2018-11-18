const { Model } = require('objection');
const path = require('path');

module.exports = class Admin extends Model {
    static get tableName() {
        return 'administrator';
    }

    static get idColumn() {
      return 'user_id';
    }

    static get relationMappings() {
      const User = require('./user');
      return {
        admin: {
          relation: Model.HasOneRelation,
          modelClass: User,
          join: {
            from: 'administrator.user_id',
            to: 'all_users.id'
          }
        }
      }
    }
};
