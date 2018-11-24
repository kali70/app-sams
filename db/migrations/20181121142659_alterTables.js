exports.up = function(knex, Promise) {
return Promise.all([
    knex.schema.withSchema('authsvc').createTable('type', table => {
      table.increments('id').primary();
      table.string('type');
    }),

    knex.schema.withSchema('authsvc').createTable('all_users', table => {
      table.increments('id').primary();
      table.string('email').unique().notNullable();
      table.integer('type').unsigned().references('id').inTable('authsvc.type');
      table.string('role').notNullable();
      table.timestamps(true, true);
    }),
    knex.schema.withSchema('authsvc').createTable('administrator', table => {
      table.integer('user_id').unsigned().primary();
      table.string('telephon_number').nullable();
      table.string('password', 60).notNullable();
      table.boolean('email_valid').notNullable().defaultTo(true);
      table.foreign('user_id').references('id').inTable('authsvc.all_users');
      table.timestamps(true, true);
    })
])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('authsvc.administrator'),
    knex.schema.dropTable('authsvc.all_users'),
    knex.schema.dropTable('authsvc.type')
  ]);
};
