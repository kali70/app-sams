const typeData = require('../../data/type');
const userData = require('../../data/all_users');
const bcrypt = require('bcrypt');
const saltRounds = 10;



exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(knex.ref('administrator').withSchema('authsvc')).del()
    .then(() => {
      return knex(knex.ref('all_users').withSchema('authsvc')).del()
    }).then(() => {
      return knex(knex.ref('type').withSchema('authsvc')).del();
    }).then(() => {
      return knex(knex.ref('type').withSchema('authsvc')).insert(typeData);
    }).then(() => {
      let allUsersPromises = [];
      userData.forEach((user) => {
        let type = user.type;
        allUsersPromises.push(createUser(knex, user, type));
      });
      return Promise.all(allUsersPromises);
    }).then(() => {
      let allAdminsPromises = [];
      console.log("typeID: ");
      return knex.select('id').from(knex.ref('type').withSchema('authsvc')).where('type', 'administrator').then(typeID => {
        console.log("typeID: ", typeID);
        return knex.select('*').from(knex.ref('all_users').withSchema('authsvc')).where('type', typeID[0].id)
              .then((rows) => {
                console.log("rows : ", rows);
                for (row of rows) {
                  console.log(`${row['id']}`);
                  var currAdmin = userData.filter(obj => {
                    obj.id = row['id'];
                    if(obj.email === row.email)
                    allAdminsPromises.push(createAdmin(knex, obj));
                    return obj;
                  });
                //  console.log("row['id']: ", currAdmin);
                //  currAdmin.password = bcrypt.hash(currAdmin.password, saltRounds);

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
  return knex(knex.ref('type').withSchema('authsvc')).where('type', type).first()
    .then((typeRec) => {
      return knex(knex.ref('all_users').withSchema('authsvc')).insert({
        type: typeRec.id,
        email: user.email,
        role: user.role
      });
    });
};
const createAdmin = (knex, user) => {
  console.log("WIll Create", user);
    return knex(knex.ref('administrator').withSchema('authsvc')).insert({
      user_id: user.id,
      telephon_number: user.telephon_number,
      password: user.password,
      email_valid: false
    });
};
