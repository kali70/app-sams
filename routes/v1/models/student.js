const { Model } = require('objection');
const path = require('path');

module.exports = class Student extends Model {
    static get tableName() {
        return 'regionsvc.students';
    }
};
