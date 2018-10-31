exports.up = function(knex, Promise) {
return Promise.all([
    knex.schema.withSchema('authsvc').createTable('type', table => {
      table.increments('id').primary();
      table.string('type');
    }),

    knex.schema.withSchema('authsvc').createTable('all_users', table => {
      table.increments('id').primary();
      table.string('email');
      table.integer('type').unsigned().references('type.id');
      table.timestamps();
    }),
    knex.schema.withSchema('authsvc').createTable('administrator', table => {
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
    knex.schema.dropTable('administrator'),
    knex.schema.dropTable('all_users'),
    knex.schema.dropTable('type')
  ]);
};
