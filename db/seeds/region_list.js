const regionData = require('../../data/region_list');
console.log("regionData: ", regionData);
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(knex.ref('region_list').withSchema('regionsvc')).del()
    .then(() => {
      return knex(knex.ref('region_list').withSchema('regionsvc')).insert(regionData);
    })
};
