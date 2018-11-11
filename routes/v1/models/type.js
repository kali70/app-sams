const { Model } = require('objection');
const path = require('path');
const User = require('../models/user');

module.exports = class Type extends Model {
    static get tableName() {
        return 'type';
    }
};



// module.exports = class Vehicles extends Model {
//     static get tableName() {
//         return 'region.vehicles';
//     }
//
//     static get relationMappings() {
//         return {
//             fleet: {
//                 relation: Model.HasOneRelation,
//                 modelClass: path.join(__dirname, 'fleets'),
//                 join: {
//                     from: 'region.vehicles.fleet_id',
//                     to: 'region.fleets.id'
//                 }
//             },
//             vehicle_types: {
//                 relation: Model.HasOneRelation,
//                 modelClass: path.join(__dirname, 'vehicleTypes'),
//                 join: {
//                     from: 'region.vehicles.vehicle_type',
//                     to: 'region.vehicle_types.id'
//                 }
//             },
//             vehicleStatus: {
//                 relation: Model.HasOneRelation,
//                 modelClass: path.join(__dirname, 'vehicleStatus'),
//                 join: {
//                     from: 'region.vehicles.vehicle_status',
//                     to: 'region.vehicle_status.id'
//                 }
//             }
//         };
//     }
// };
