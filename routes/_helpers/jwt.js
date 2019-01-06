'use strict';
const expressJwt = require('express-jwt');
const secret = 'E1F06C85D1941B8E427E38E0C5A18F53748D9AA17051F8E9D430A93988A94E1E';

module.exports = jwt;
function jwt() {
  return expressJwt({ secret }).unless({
    path: [
      // public routes that don't require authentication
      '/api/v1/login'
    ]
  });
}
