
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('all_users', function(t) {
  t.unique('email');
})
};

exports.down = function(knex, Promise) {

};
