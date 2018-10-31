const Knex = require('knex')
const connection = require('../knexfile')['development']
const { Model } = require('objection')

const knexConnection = Knex(connection)

Model.knex(knexConnection)

class User extends Model {
  static get tableName () {
    return 'users'
  }

  static get relationMappings () {
    return {
      idea: {
        relation: Model.BelongsToOneRelation,
        modelClass: Type,
        join: {
          from: 'users.types_id',
          to: 'types.id'
        }
      }
    }
  }
}

class Type extends Model {
  static get tableName () {
    return 'types'
  }

  static get relationMappings () {
    return {
      users: {
        relation: Model.HasManyRelation,
        modelClass: User,
        join: {
          from: 'types.id',
          to: 'users.types_id'
        }
      }
    }
  }
}

module.exports = { Type, User }
