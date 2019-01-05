/**
 * @class createTokenV4
 */
'use strict';
const jwt = require('jsonwebtoken');
const ld = require('lodash');
 const cert = 'E1F06C85D1941B8E427E38E0C5A18F53748D9AA17051F8E9D430A93988A94E1E';

  const createToken = function (user) {
      try {
          const profile = ld.pick(user, 'email', 'administrator', 'role', 'type', 'email_valid');
          profile.email_valid = user.email_valid;
          profile.user_id = user.id;
          var token = jwt.sign(profile, cert, { expiresIn: "7 days" });
          return token;
      } catch (err) {
          console.log(err);
      }
  };
module.exports = createToken;
