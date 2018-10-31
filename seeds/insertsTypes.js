const typeData = require('../data/type');
const userData = require('../data/all_users');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('all_users').del()
    .then(() => {
      return knex('type').del();
    })
    .then(() => {
      return knex('type').insert(typeData);
    }).then(() => {
      let allUsersPromises = [];
      userData.forEach((user) => {
        let type = user.type;
        allUsersPromises.push(createUser(knex, user, type));
      });
      return Promise.all(allUsersPromises);
    }).then(() => {
      let allAdminsPromises = [];
      return knex.select('id').from('type').where('type', 'administrator').then(typeID => {
        console.log("typeID: ", typeID);
        return knex.select('*').from('all_users').where('type', typeID[0].id)
              .then((rows) => {
                console.log("rows : ", rows);
                for (row of rows) {
                  console.log(`${row['id']}`);
                  allAdminsPromises.push(createAdmin(knex, row));
                }
              }).then(() => {
                return Promise.all(allAdminsPromises);
              }).
              catch((err) => { console.log( err); throw err })
              .finally(() => {
                knex.destroy();
              });
      })
    });
};

const createUser = (knex, user, type) => {
  return knex('type').where('type', type).first()
    .then((typeRec) => {
      return knex('all_users').insert({
        type: typeRec.id,
        email: user.email
      });
    });
};
const createAdmin = (knex, user) => {
  console.log("WIll Create")
    return knex('administrator').insert({
      user_id: user.id,
      telephon_number: '613-276-5990',
      password: 'Libya2015',
      email: false,
    });
};
