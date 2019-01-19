exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.withSchema('regionsvc').createTable('students', table => {
      table.increments('id').primary();
      table.integer('region_id').unsigned().references('id').inTable('regionsvc.region_list');
      table.string('firs_name').notNullable();
      table.string('last_name').notNullable();
      table.integer('nid').unique().notNullable();
      table.text('martial_status');
      table.boolean('active').notNullable().defaultTo(true);
      table.string('contact_number');
      table.string('email');
      table.timestamps(true, true);
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('regionsvc.students')
  ])
};
