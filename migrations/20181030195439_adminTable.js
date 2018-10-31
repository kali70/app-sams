exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('administrator', table => {
      table.integer('user_id').unsigned().primary();
      table.string('telephon_number').notNull();
      table.string('password', 60).notNull();
      table.boolean('email').notNull().defaultTo(true);
      table.foreign('user_id').references('all_users.id');
      table.timestamps();
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('administrator')
  ]);
};
