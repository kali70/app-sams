const { Model } = require('objection');
const path = require('path');

module.exports = class User extends Model {
    static get tableName() {
        return 'all_users';
    }
};
