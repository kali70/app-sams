
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('type', table => {
      table.increments('id').primary();
      table.string('type');
    }),

    knex.schema.createTable('all_users', table => {
      table.increments('id').primary();
      table.string('email');
      table.integer('type').unsigned().references('type.id');
      table.timestamps();
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('all_users'),
    knex.schema.dropTable('type')
  ]);
};
