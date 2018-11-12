const { Model } = require('objection');
const path = require('path');

module.exports = class Type extends Model {
    static get tableName() {
        return 'type';
    }
};
