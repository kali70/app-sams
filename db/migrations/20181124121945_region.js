exports.up = function(knex, Promise) {
  return Promise.all([
      knex.schema.withSchema('regionsvc').createTable('region_list', table => {
        table.increments('id').primary();
        table.string('name');
      }),

      knex.schema.withSchema('regionsvc').createTable('regions', table => {
        table.integer('region_id').unsigned().references('id').inTable('regionsvc.region_list');
        table.string('name').unique().notNullable();
        table.text('description');
        table.boolean('active').notNullable().defaultTo(true);
        table.string('contact_number');
        table.timestamps(true, true);
      })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('regionsvc.region_list'),
    knex.schema.dropTable('regionsvc.regions'),
  ]);
};
