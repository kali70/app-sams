const { Model } = require('objection');
const Password = require('objection-password')();
const path = require('path');

module.exports = class Admin extends Password(Model) {
    static get tableName() {
        return 'authsvc.administrator';
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
            from: 'authsvc.administrator.user_id',
            to: 'authsvc.all_users.id'
          }
        }
      }
    }
};
