const { Model } = require('objection');
const path = require('path');

module.exports = class Admin extends Model {
    static get tableName() {
        return 'administrator';
    }

    static get idColumn() {
      return 'user_id';
    }
};
